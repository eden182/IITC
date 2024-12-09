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

  const location = useLocation();
  const isEevee = name.toLowerCase() === "eevee";
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
        // Fetch Pokémon details
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        // Fetch the species data Url
        const speciesResponse = await axios.get(response.data.species.url);

        console.log("Species Response:", speciesResponse.data); // Log for debugging

        setGeneration(speciesResponse.data.generation.name);

        setIsLegendary(speciesResponse.data.is_legendary || false);
        setIsMythical(speciesResponse.data.is_mythical || false);

        // Fetch cry sound
        const cryUrl = response.data.cries?.latest || null;
        setCryUrl(cryUrl); // Set the cry URL state

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
        // Set states for data
        traverseEvolutionChain(chain);
        setEvolutionChain(evolutions);
        // Set the rest of the Pokémon details
        setPokemon(response.data);
        setGenderRate(speciesResponse.data.gender_rate);
        setEggGroups(
          speciesResponse.data.egg_groups.map((group) => group.name)
        );
        setHatchCounter(speciesResponse.data.hatch_counter);
        setBaseStats(response.data.stats);
        setMoves(response.data.moves);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

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
        style={{
          height: "98vh",
          width: "98vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "red", fontSize: "80px" }}>
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
        <div>
          {/* images */}
          <img
            src={
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              pokemon.sprites?.home.front_default
            }
            alt={pokemon.name}
          />
          <img
            src={
              pokemon.sprites?.other?.["official-artwork"]?.front_shiny ||
              pokemon.sprites?.home.front_default
            }
            alt={pokemon.name}
            className="img2shiny"
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
            Height: <b>{pokemon.height} feet</b>
          </p>
          <p>
            Weight: <b>{pokemon.weight} ibs</b>
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
          <div
            className="evolutionCon"
            style={{
              display: "flex",
              justifyContent: isEevee ? "flex-start" : "center",
              alignItems: "center",
              overflowX: "scroll",
            }}
          >
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
                          e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${evolutionId}.png`; // Fallback image
                        }}
                        style={{
                          width: "80px",
                          height: "80px",
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
