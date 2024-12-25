import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/PokeData.css";

const useFetchPokemon = () => {
  const [legendaryPokemon, setLegendaryPokemon] = useState([]);

  useEffect(() => {
    const fetchLegendaryPokemon = async () => {
      try {
        const legendaryList = [];
        for (let i = 1; i <= 1025; i++) {
          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            const pokemonData = response.data;

            const speciesResponse = await axios.get(pokemonData.species.url);
            const speciesData = speciesResponse.data;

            const isLegendary = speciesData.is_legendary;
            const isMythical = speciesData.is_mythical;

            if (isLegendary || isMythical) {
              if (!pokemonData.name) {
                console.warn(
                  `Skipping Pokémon with ID ${pokemonData.id} due to missing name`
                );
                continue;
              }
              const spriteUrl =
                pokemonData.sprites?.other?.showdown?.front_default ||
                pokemonData.sprites?.versions?.["generation-v"]?.["black-white"]
                  ?.animated?.front_default ||
                pokemonData.sprites?.front_default;

              legendaryList.push({
                key: pokemonData.id,
                id: pokemonData.id,
                name: pokemonData.name,
                types:
                  pokemonData.types.map((typeInfo) => typeInfo.type?.name) ||
                  [],
                sprite: spriteUrl,
              });
            }
          } catch (fetchError) {
            console.warn(
              `Skipping Pokémon with ID ${i} due to error: ${fetchError.message}`
            );
            continue;
          }
        }

        setLegendaryPokemon(legendaryList);
      } catch (err) {
        console.error("Error fetching Pokémon:", err);
      }
    };

    fetchLegendaryPokemon();
  }, []);

  return { legendaryPokemon };
};

export default useFetchPokemon;
