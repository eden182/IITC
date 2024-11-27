import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";
import "./styles/PokeData.css";

const PokeData = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [startIndex, setStartIndex] = useState(1);

  const fetchPokemons = async () => {
    try {
      const fetchedPokemon = [];
      const endIndex = startIndex + 27;
      for (let i = startIndex; i <= endIndex; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        fetchedPokemon.push(response.data);
      }
      setPokemonList(fetchedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [startIndex]);

  const handleNext = () => {
    if (startIndex + 27 < 1025) {
      setStartIndex(startIndex + 28);
    }
  };

  const handleBack = () => {
    if (startIndex > 1) {
      setStartIndex(startIndex - 28);
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 className="hl">
          <span className="p"> P</span>okedex
          <div className="mew1"></div>
        </h1>
        <button
          className="moveBut"
          id="backBut"
          onClick={handleBack}
          disabled={startIndex === 1}
        >
          &#129168;
        </button>
        <button
          className="moveBut"
          id="nextBut"
          onClick={handleNext}
          disabled={startIndex + 25 >= 1025}
        >
          &#129170;
        </button>
      </div>
      <div className="pokeCon">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprite={
              pokemon.sprites.versions["generation-v"]["black-white"][
                "animated"
              ].front_default
                ? pokemon.sprites.versions["generation-v"]["black-white"][
                    "animated"
                  ].front_default
                : pokemon.sprites.front_default
            }
          />
        ))}
      </div>
    </>
  );
};

export default PokeData;
