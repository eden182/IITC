import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/CardDetails.css";
import "./styles/PokeData.css";

const CardDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card-details">
        <h1>{pokemon.name}</h1>
        <img
          src={
            pokemon.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.animated?.front_default || pokemon.sprites?.front_default
          }
          alt={pokemon.name}
        />
        <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
};

export default CardDetails;
