import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// import Components
import "./styles/CardDetails.css";
import "./styles/PokeData.css";
// import Menu from "./Menu";

const CardDetails = () => {
  const { name } = useParams();

  // hooks
  const [pokemon, setPokemon] = useState(null);
  const [generation, setGeneration] = useState("");
  const [genderRate, setGenderRate] = useState(null);
  const [eggGroups, setEggGroups] = useState([]);
  const [hatchCounter, setHatchCounter] = useState(null);
  const [baseStats, setBaseStats] = useState([]);
  const [activePage, setActivePage] = useState("page1");
  const [moves, setMoves] = useState([]);
  const [cryUrl, setCryUrl] = useState(null);
  const [activeMove, setActiveMove] = useState(null);
  const [moveDetails, setMoveDetails] = useState({});
  const [isLegendary, setIsLegendary] = useState(false);
  const [isMythical, setIsMythical] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [forms, setForms] = useState([]);
  const [nextEvolution, setNextEvolution] = useState([]);

  const location = useLocation();
  const isEevee = name.toLowerCase() === "eevee";
  const isMeowstic = name.toLowerCase() === "meowstic-female";
  const navigate = useNavigate();

  // page remembering
  const { selectedMode } = location.state || {};
  // functions
  function handleBackToPage() {
    navigate(-1, { state: { selectedMode } });
  }

  const handlePageChange = (pageId) => {
    console.log("Changing to:", pageId);
    setActivePage(pageId);
  };

  const handleMoveClick = (moveName, moveUrl) => {
    if (activeMove === moveName) {
      setActiveMove(null);
    } else {
      setActiveMove(moveName);
      fetchMoveDetails(moveUrl, moveName);
    }
  };

  const playCry = () => {
    if (cryUrl) {
      const audio = new Audio(cryUrl);
      audio.play().catch((error) => {
        console.error("Error playing cry sound:", error);
      });
    } else {
      console.warn("No cry sound available to play.");
      alert("no sound for this pokemon");
    }
  };

  // axios fetch for default and species Urls
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Fetch Pokémon details for the base Pokémon
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        // Fetch the species data URL
        const speciesResponse = await axios.get(response.data.species.url);

        console.log("Species Response:", speciesResponse.data);

        setGeneration(speciesResponse.data.generation.name);
        setIsLegendary(speciesResponse.data.is_legendary || false);
        setIsMythical(speciesResponse.data.is_mythical || false);

        // Fetch cry sound
        const cryUrl = response.data.cries?.latest || null;
        setCryUrl(cryUrl);

        // Fetch Evolution Chain
        const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);

        const evolutions = [];
        let chain = evolutionChainResponse.data.chain;

        // Traverse the evolution chain and get the ID and names of the evolutions
        const traverseEvolutionChain = (chain) => {
          if (chain) {
            const evolution = {
              name: chain.species.name,
              url: chain.species.url,
            };
            evolutions.push(evolution);
            if (chain.evolves_to.length > 0) {
              chain.evolves_to.forEach((evolution) => {
                traverseEvolutionChain(evolution);
              });
            }
          }
        };

        traverseEvolutionChain(chain);
        setEvolutionChain(evolutions);

        setPokemon(response.data);
        setGenderRate(speciesResponse.data.gender_rate);
        setEggGroups(
          speciesResponse.data.egg_groups.map((group) => group.name)
        );
        setHatchCounter(speciesResponse.data.hatch_counter);
        setBaseStats(response.data.stats);
        setMoves(response.data.moves);

        // Check if forms exist for the current Pokémon
        if (
          Array.isArray(response.data.forms) &&
          response.data.forms.length > 0
        ) {
          const formsDetails = await getFormsDetails(response.data.forms);
          setForms(formsDetails);
        } else {
          setForms([]);
        }

        const allPokemonResponse = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?&limit=10240"
        );
        const allPokemonNames = allPokemonResponse.data.results;

        const matchingForms = await Promise.all(
          allPokemonNames
            .filter((pokemon) => {
              const baseName = name.split("-")[0];
              return (
                pokemon.name !== name &&
                pokemon.name.includes("-") &&
                pokemon.name.split("-")[0].toLowerCase() ===
                  baseName.toLowerCase()
              );
            })
            .map(async (pokemon) => {
              try {
                const pokemonDetails = await axios.get(pokemon.url);
                const formImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.data.id}.png`;
                return {
                  id: pokemonDetails.data.id,
                  name: pokemon.name,
                  image: formImage,
                };
              } catch (error) {
                console.error(
                  `Error fetching form details for ${pokemon.name}:`,
                  error
                );
                return null;
              }
            })
        );
        const uniqueForms = matchingForms.filter((form, index, self) => {
          return (
            self.findIndex((f) => f.name === form.name) === index // Check that the full name hasn't been added before
          );
        });

        // Separate Gmax and Mega Pokémon for nextEvolution
        const gmaxOrMegaForms = uniqueForms.filter(
          (form) =>
            form.name.includes("gmax") ||
            form.name.includes("mega") ||
            form.name.includes("mega-x") ||
            form.name.includes("mega-y")
        );

        // Filter for normal forms (excluding Gmax and Mega forms)
        const normalForms = uniqueForms.filter(
          (form) =>
            !form.name.includes("gmax") &&
            !form.name.includes("mega") &&
            !form.name.includes("mega-x") &&
            !form.name.includes("mega-y")
        );

        console.log("Gmax or Mega Forms:", gmaxOrMegaForms);
        console.log("Normal Forms:", normalForms);
        setNextEvolution(gmaxOrMegaForms);

        setForms((prevForms) => [
          ...prevForms,
          ...normalForms.filter((form) => form !== null),
        ]);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    async function getFormsDetails(formsArray) {
      if (Array.isArray(formsArray) && formsArray.length > 1) {
        const formsDetails = await Promise.all(
          formsArray.map(async (form) => {
            try {
              const response = await axios.get(form.url);
              const formData = response.data;
              return {
                name: formData.name,
                image: formData.sprites?.front_default,
              };
            } catch (error) {
              console.error(
                `Error fetching form data for ${form.name}:`,
                error
              );
              return null;
            }
          })
        );

        return formsDetails.filter((detail) => detail !== null);
      } else {
        console.log("No multiple forms found or forms array is empty.");
        return [];
      }
    }

    fetchPokemonDetails();
  }, [name]);

  // axios fetch for moves
  const fetchMoveDetails = async (moveUrl, moveName) => {
    try {
      const response = await axios.get(moveUrl);
      setMoveDetails((prev) => ({
        ...prev,
        [moveName]: {
          accuracy: response.data.accuracy,
          power: response.data.power,
          pp: response.data.pp,
        },
      }));
    } catch (error) {
      console.error("Error fetching move details:", error);
    }
  };

  // Loading
  if (!pokemon)
    return (
      <div
        className="loadingDiv"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <b>Loading...</b>
        </p>
        <div className="loadImg"></div>
      </div>
    );

  // Primary type for coloring
  const primaryType = pokemon.types[0].type.name;

  // stats coloring
  const getStatColor = (statValue) => {
    if (statValue >= 85) {
      return "#33cc33"; // Green for high stats
    } else if (statValue >= 49) {
      return "yellow"; // Yellow for medium stats
    } else if (statValue >= 15) {
      return "#ff5733"; // Red for low stats
    } else return "black";
  };

  return (
    <div
      className="wrap"
      style={{
        height: "98vh",
        width: "98vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "-1",
      }}
    >
      <header style={{ zIndex: "10", display: "flex", overflow: "visible" }}>
        <span
          className="backButton"
          style={{ fontSize: "70px", paddingLeft: "50px", cursor: "pointer" }}
          onClick={handleBackToPage}
        >
          &#8592;
        </span>
      </header>
      <div
        className="card-details"
        style={{
          backgroundColor: `var(--${primaryType})`,
          position: "relative",
        }}
      >
        <h1>
          {pokemon.name}
          {isLegendary && " ⭐"}
          {isMythical && " 💫"}
        </h1>
        <span
          style={{
            backgroundColor: "#ffffffc1",
            borderRadius: "20px",
            padding: "10px",
            display: "flex",
            alignSelf: "flex-start",
          }}
        >
          <b>#{pokemon.id}</b>
        </span>
        <div
          style={{
            marginRight: "25px",
            marginBottom: "30px",
            alignSelf: "flex-start",
            fontSize: "32px",
            position: "relative",
          }}
        >
          {pokemon.types.map((type, index) => (
            <span
              key={`${type.type.name}-${index}`}
              className={`type ${type.type.name}`}
              style={{
                borderRadius: "25px",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              {type.type.name.toUpperCase()}
            </span>
          ))}
          <button className="cryButton" onClick={playCry}>
            Play Cry <div className="soundImg"></div>
          </button>
        </div>
        <div style={{ display: "flex" }}>
          {/* images */}
          <img
            src={
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              pokemon.sprites?.home?.front_default
            }
          />
          <img
            src={
              pokemon.sprites?.other?.["official-artwork"]?.front_shiny ||
              pokemon.sprites?.home?.front_shiny
            }
            className={isMeowstic ? "hidden" : "img2shiny"}
          />
        </div>
      </div>
      {/* about details pages */}
      <div className="pokeAbout">
        {/* header buttons */}
        <div
          className="aboutHeader"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => handlePageChange("page1")}
            className="headButton"
          >
            About
          </button>
          <button
            onClick={() => handlePageChange("page2")}
            className="headButton"
          >
            Stats
          </button>
          <button
            onClick={() => handlePageChange("page3")}
            className="headButton"
          >
            Evolution
          </button>
          <button
            id="lastPageButton"
            onClick={() => handlePageChange("page4")}
            className="headButton"
          >
            Moves
          </button>
        </div>
        {/* page 1 */}
        <div
          className={`aboutPage ${activePage === "page1" ? "active" : ""}`}
          id="page1"
        >
          {isLegendary && (
            <p style={{ color: "red", marginTop: "30px" }}>
              <b>{pokemon.name} is a Legendary!</b>
            </p>
          )}
          {isMythical && (
            <p style={{ color: "red", marginTop: "30px" }}>
              {pokemon.name} is a Mythical!
            </p>
          )}
          <p>
            Species: <b>{pokemon.species?.name}</b>
          </p>
          <p>
            Base-xp: <b>{pokemon.base_experience}</b>
          </p>
          <p>
            Gen: <b>{generation}</b>
          </p>
          <p>
            Height: <b>{(pokemon.height * 0.1).toFixed(1)} meter</b>
          </p>
          <p>
            Weight: <b>{(pokemon.weight * 0.1).toFixed(2)} k"g</b>
          </p>
          <p>
            Abilities:
            <b>
              {" "}
              {pokemon.abilities
                .map((abilityObj) => abilityObj.ability.name)
                .join(", ")}
            </b>
          </p>
          <h3 style={{ fontSize: "26px" }}>
            <b>Breeding</b>
          </h3>
          <p>
            Gender:
            <b>
              {" "}
              {genderRate === 0
                ? "Genderless"
                : genderRate === 8
                ? "Always Male"
                : "Male/Female Possible"}
            </b>
          </p>
          <p>
            Egg Groups: <b>{eggGroups.join(", ")}</b>
          </p>
          <p>
            Hatch Counter: <b>{hatchCounter}</b>
          </p>
        </div>
        {/* page 2 */}
        <div
          className={`aboutPage ${activePage === "page2" ? "active" : ""}`}
          id="page2"
        >
          <h3>Base Stats</h3>
          <div>
            {baseStats.map((statObject, index) => {
              const statName =
                statObject.stat?.name.toUpperCase() || "Unknown Stat";
              const statValue = statObject.base_stat || 0;
              const normalizedStatValue = (statValue / 180) * 100;
              const statColor = getStatColor(statValue);
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ marginRight: "30px", width: "60px" }}>
                    {statName}
                  </p>
                  <p
                    style={{
                      marginRight: "30px",
                      width: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    {statValue}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      backgroundColor: "#ddd",
                      borderRadius: "5px",
                      marginRight: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: `${normalizedStatValue}%`,
                        height: "100%",
                        backgroundColor: statColor,
                        borderRadius: "5px",
                        minWidth: "5px",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* page 3 */}
        <div
          className={`aboutPage ${activePage === "page3" ? "active" : ""}`}
          id="page3"
        >
          <h3 style={{ fontSize: "30px", marginTop: "80px" }}>
            <b>Evolution</b>
          </h3>
          <div className={isEevee ? "eeveelution" : "evolutionCon"}>
            {evolutionChain.length > 0 ? (
              evolutionChain.map((evolution, index) => {
                const evolutionId = evolution.url.split("/")[6];
                return (
                  <div
                    key={index}
                    style={{
                      margin: "0 10px",
                      textAlign: "center",
                      display: "flex",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p
                        style={{
                          marginTop: "70px",
                          fontWeight: "bold",
                          marginRight: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        {evolution.name}
                      </p>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${evolutionId}.svg`}
                        alt={evolution.name}
                        onError={(e) => {
                          e.target.onerror = null; // Prevent infinite loop
                          e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionId}.png`; // Fallback image
                        }}
                        style={{
                          width: "120px",
                          height: "120px",
                          marginRight: "30px",
                          marginLeft: "30px",
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No evolution data available...</p>
            )}
          </div>
          <h3 style={{ fontSize: "30px", marginTop: "100px" }}>
            <b>Forms</b>
          </h3>
          <div className="formsDiv">
            {forms.length > 0 ? (
              forms.map((form, index) => (
                <div
                  key={index}
                  style={{
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>{form.name}</p>
                  <img
                    src={form.image}
                    alt={form.name}
                    style={{
                      width: "160px",
                      height: "160px",
                      padding: "0",
                    }}
                  />
                </div>
              ))
            ) : (
              <p>No forms available.</p>
            )}
          </div>
          <h3 style={{ fontSize: "30px", marginTop: "100px" }}>
            <b>gmax & Mega Evolutions</b>
          </h3>
          <div className="nextEvolutionCon">
            {nextEvolution.length > 0 ? (
              <ul>
                {nextEvolution.map((evolution) => (
                  <li key={evolution.id}>
                    <p>{evolution.name}</p>
                    <img
                      src={evolution.image}
                      alt={`Evolution of ${evolution.name}`}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ marginLeft: "20px", color: "darkred" }}>
                No Gmax or Mega evolutions for this pokemon.
              </p>
            )}
          </div>
        </div>
        {/* page 4 */}
        <div
          className={`aboutPage ${activePage === "page4" ? "active" : ""}`}
          id="page4"
        >
          <ul>
            {moves.slice(0, 40).map((move, index) => (
              <li
                key={index}
                onClick={() => handleMoveClick(move.move.name, move.move.url)}
                style={{ cursor: "pointer" }}
              >
                <p
                  className={activeMove === move.move.name ? "active-move" : ""}
                  style={{
                    margin: 0,
                    fontWeight:
                      activeMove === move.move.name ? "bold" : "normal",
                    color:
                      activeMove === move.move.name
                        ? `var(--${primaryType})`
                        : "inherit",
                  }}
                >
                  <b>{move.move.name}</b>
                </p>
                {activeMove === move.move.name &&
                  moveDetails[move.move.name] && (
                    <div style={{ fontSize: "0.9em" }}>
                      <p>
                        Accuracy: {moveDetails[move.move.name].accuracy || "UK"}
                      </p>
                      <p>Power: {moveDetails[move.move.name].power || "UK"}</p>
                      <p>PP: {moveDetails[move.move.name].pp || "UK"}</p>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
