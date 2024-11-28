import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";
import "./styles/PokeData.css";

const PokeData = ({ selectedMode }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [startIndexMega, setStartIndexMega] = useState(10001);

  const fetchPokemons = async () => {
    try {
      const fetchedPokemon = [];
      let endIndex = startIndex + 23;
      let fetchStartIndex = startIndex;
      let fetchEndIndex = endIndex;

      if (selectedMode === "mega" || selectedMode === "mega-shiny") {
        fetchStartIndex = startIndexMega;
        fetchEndIndex = fetchStartIndex + 23;
      }

      console.log("Selected mode:", selectedMode);

      for (let i = fetchStartIndex; i <= fetchEndIndex; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const data = response.data;

        let spriteUrl =
          data.sprites?.other?.showdown?.front_default ||
          data.sprites?.front_default;

        if (selectedMode === "mega") {
          spriteUrl = data.sprites?.other?.showdown?.front_default || spriteUrl;
        }

        if (selectedMode === "mega-shiny") {
          spriteUrl =
            data.sprites?.other?.showdown?.front_shiny ||
            data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
              ?.front_shiny ||
            spriteUrl;
        }

        if (selectedMode === "back") {
          spriteUrl = data.sprites?.other?.showdown?.back_default || spriteUrl;
        }

        if (selectedMode === "shiny-back") {
          spriteUrl = data.sprites?.other?.showdown?.back_shiny || spriteUrl;
        }

        if (selectedMode === "shiny") {
          spriteUrl = data.sprites?.other?.showdown?.front_shiny || spriteUrl;
        }

        if (!spriteUrl) {
          console.log("No sprite found for Pokémon:", data.name);
        }

        console.log("Fetched Pokémon data:", data.name);
        fetchedPokemon.push({
          ...data,
          sprite: spriteUrl, // Add sprite URL to the Pokémon data
        });
      }

      console.log(
        "Final Pokémon list:",
        fetchedPokemon.map((p) => p.name)
      );
      setPokemonList(fetchedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [startIndex, startIndexMega, selectedMode]); // Watch for changes in both startIndex

  const handleNext = () => {
    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      // Mega Pokémon pagination
      if (startIndexMega + 23 < 10278) {
        setStartIndexMega(startIndexMega + 24);
      }
    } else {
      // Default Pokémon pagination
      if (startIndex + 23 < 1025) {
        setStartIndex(startIndex + 24);
      }
    }
  };

  const handleBack = () => {
    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      // Mega Pokémon pagination
      if (startIndexMega > 10001) {
        setStartIndexMega(startIndexMega - 24);
      }
    } else {
      // Default Pokémon pagination
      if (startIndex > 1) {
        setStartIndex(startIndex - 24);
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          className="moveBut"
          id="backBut"
          onClick={handleBack}
          disabled={
            selectedMode === "mega" || selectedMode === "mega-shiny"
              ? startIndexMega === 10001
              : startIndex === 1
          }
        >
          &#129168;
        </button>
        <h1 className="hl">
          <span className="p"> P</span>okedex
          <div className="mew1"></div>
        </h1>
        <button
          className="moveBut"
          id="nextBut"
          onClick={handleNext}
          disabled={
            selectedMode === "mega" || selectedMode === "mega-shiny"
              ? startIndexMega + 25 >= 10278
              : startIndex + 25 >= 1025
          }
        >
          &#129170;
        </button>
      </div>
      <div className="pokeCon">
        {pokemonList.length === 0 && <p>No Pokémon found.</p>}
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprite={pokemon.sprite}
          />
        ))}
      </div>
    </>
  );
};

export default PokeData;
