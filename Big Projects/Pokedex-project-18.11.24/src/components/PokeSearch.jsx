import React, { useState } from "react";
import axios from "axios";
import "./styles/PokeSearch.css";
import PokemonCard from "./PokemonCard";
import Header from "../components/Header.jsx";

const PokeSearch = () => {
  const [pokemonView, setPokemonView] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const searchPokemons = async (query) => {
    try {
      if (query) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
        );
        setPokemonView([response.data]);
      } else {
        setPokemonView([]);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemonView([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      searchPokemons(query);
      setHasSearched(true);
    }
  };

  return (
    <div className="fullSearch">
      <Header />
      <div>
        <h2 className="h2">Search for a Pokemon</h2>
        <input
          className="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search by name or ID"
        />
      </div>
      <div className="pokeSearch">
        {hasSearched && searchQuery && pokemonView.length === 0 && (
          <p style={{ color: "red", marginBottom: "180px", fontSize: "50px" }}>
            {/* No Pokémon found for {searchQuery} */}
          </p>
        )}

        {pokemonView.map((pokemon) => (
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
      <div className="shinyMew"></div>
    </div>
  );
};

export default PokeSearch;
