import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import Components
import "./styles/CardDetails.css";
import "./styles/PokeData.css";
import Menu from "./Menu";

const CardDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // hooks
  const [pokemon, setPokemon] = useState(null);
  const [genderRate, setGenderRate] = useState(null);
  const [eggGroups, setEggGroups] = useState([]);
  const [hatchCounter, setHatchCounter] = useState(null);
  const [baseStats, setBaseStats] = useState([]);
  const [activePage, setActivePage] = useState("page1");
  const [moves, setMoves] = useState([]);
  const [cryUrl, setCryUrl] = useState(null);

  // functions
  function handleBackToPage() {
    navigate("../pokedex");
  }

  const handlePageChange = (pageId) => {
    console.log("Changing to:", pageId);
    setActivePage(pageId);
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

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const speciesResponse = await axios.get(response.data.species.url);
        setPokemon(response.data);
        setGenderRate(speciesResponse.data.gender_rate);
        setEggGroups(
          speciesResponse.data.egg_groups.map((group) => group.name)
        );
        setHatchCounter(speciesResponse.data.hatch_counter);
        setBaseStats(response.data.stats);
        setMoves(response.data.moves);

        // Assuming the cries object is directly available in the response
        const crySound = response.data.cries?.legacy; // Accessing the cry directly
        if (crySound) {
          setCryUrl(crySound);
        } else {
          console.warn("Cry sound not available for this Pokémon.");
        }
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  const primaryType = pokemon.types[0].type.name;

  // Find the max base stat for scaling the bars
  const maxStatValue = Math.max(...baseStats.map((stat) => stat.base_stat));

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
        <Menu />
      </header>
      <div
        className="card-details"
        style={{
          backgroundColor: `var(--${primaryType})`,
          position: "relative",
        }}
      >
        <h1>{pokemon.name}</h1>
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
          {/* Play Cry Button */}
          <button className="cryButton" onClick={playCry}>
            Play Cry
          </button>
        </div>
        <div>
          {/* image */}
          <img
            src={
              pokemon.sprites?.other?.["official-artwork"]?.front_default ||
              pokemon.sprites?.home.front_default
            }
            alt={pokemon.name}
          />
          {/* shiny desktop only */}
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
      {/* about details */}
      <div className="pokeAbout">
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
        {/* Use `active` class  */}
        <div
          className={`aboutPage ${activePage === "page1" ? "active" : ""}`}
          id="page1"
        >
          <p>Species: {pokemon.species?.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>
            Abilities:{" "}
            {pokemon.abilities
              .map((abilityObj) => abilityObj.ability.name)
              .join(", ")}
          </p>
          <h3>
            <b>Breeding</b>
          </h3>
          <p>
            Gender:{" "}
            {genderRate === 0
              ? "Genderless"
              : genderRate === 8
              ? "Always Male"
              : "Male/Female Possible"}
          </p>
          <p>Egg Groups: {eggGroups.join(", ")}</p>
          <p>Hatch Counter: {hatchCounter}</p>
        </div>

        <div
          className={`aboutPage ${activePage === "page2" ? "active" : ""}`}
          id="page2"
        >
          <h3>Base Stats</h3>
          <div>
            {baseStats.map((statObject, index) => {
              // Ensure the structure is correctly accessed
              const statName = statObject.stat?.name || "Unknown Stat"; // Use optional chaining for safety
              const statValue = statObject.base_stat || 0; // Default to 0 if statValue is undefined

              const normalizedStatValue = (statValue / 100) * 100;
              // Get the stat color based on value
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
                  <p style={{ marginRight: "10px", width: "60px" }}>
                    {statName}
                  </p>
                  <p style={{ marginRight: "10px", width: "40px" }}>
                    {statValue}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      backgroundColor: "#ddd",
                      borderRadius: "5px",
                      marginRight: "10px",
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

        <div
          className={`aboutPage ${activePage === "page3" ? "active" : ""}`}
          id="page3"
        ></div>

        <div
          className={`aboutPage ${activePage === "page4" ? "active" : ""}`}
          id="page4"
        >
          {moves.map((move, index) => (
            <p key={index}>{move.move.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
