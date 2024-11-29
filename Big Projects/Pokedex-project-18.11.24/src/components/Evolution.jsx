// EvolutionChain.js
import React from "react";

// Helper function to capitalize the first letter of the Pokémon name
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Helper function to get Pokemon ID from the name
const getPokemonId = (pokemonName) => {
  // You can map the names to IDs or extract IDs from the API if needed
  const pokemonIdMapping = {
    bulbasaur: 1,
    ivysaur: 2,
    venusaur: 3,
    // Add other Pokémon mappings as needed
  };

  return pokemonIdMapping[pokemonName] || 0; // Default to 0 if ID is not found
};

const EvolutionChain = ({ chain }) => {
  const renderEvolutionChain = (chain) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginRight: "20px" }}>
          {/* Display first Pokémon in the chain */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
              chain.species.name
            )}.png`}
            alt={chain.species.name}
            style={{ width: "20px", height: "20px" }}
          />
          <div>{capitalizeFirstLetter(chain.species.name)}</div>
        </div>

        {/* If there are evolutions, render the arrow and next Pokémon */}
        {chain.evolves_to.length > 0 && (
          <div>
            <span style={{ fontSize: "30px", margin: "0 10px" }}>➡️</span>
          </div>
        )}

        {chain.evolves_to.map((evolution, index) => (
          <div key={index} style={{ textAlign: "center", marginRight: "20px" }}>
            {/* Render evolution Pokémon */}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
                evolution.species.name
              )}.png`}
              alt={evolution.species.name}
              style={{ width: "100px", height: "100px" }}
            />
            <div>{capitalizeFirstLetter(evolution.species.name)}</div>

            {/* Recursively render evolutions if they exist */}
            {evolution.evolves_to.length > 0 && renderEvolutionChain(evolution)}
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderEvolutionChain(chain)}</div>;
};

export default EvolutionChain;
