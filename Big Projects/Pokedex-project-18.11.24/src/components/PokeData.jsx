import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";
import "./styles/PokeData.css";

const PokeData = ({ selectedMode }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [startIndex, setStartIndex] = useState(
    () => parseInt(localStorage.getItem("startIndex")) || 1
  );
  const [startIndexMega, setStartIndexMega] = useState(
    () => parseInt(localStorage.getItem("startIndexMega")) || 10001
  );
  const [currentPage, setCurrentPage] = useState(
    () => parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [totalPages, setTotalPages] = useState(51);
  const itemsPerPage = 20;
  const navigate = useNavigate();

  useEffect(() => {
    // Save startIndex and currentPage to localStorage
    localStorage.setItem("startIndex", startIndex);
    localStorage.setItem("startIndexMega", startIndexMega);
    localStorage.setItem("currentPage", currentPage);
  }, [startIndex, startIndexMega, currentPage]);

  const fetchPokemons = async () => {
    try {
      const fetchedPokemon = [];
      let fetchStartIndex = startIndex;
      let fetchEndIndex = startIndex + itemsPerPage - 1;

      // Adjust for Mega Pokémon
      if (selectedMode === "mega" || selectedMode === "mega-shiny") {
        fetchStartIndex = startIndexMega;
        fetchEndIndex = fetchStartIndex + itemsPerPage - 1;
      }

      for (let i = fetchStartIndex; i <= fetchEndIndex; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const data = response.data;

        let spriteUrl =
          data.sprites?.other?.showdown?.front_default ||
          data.sprites?.front_default;

        if (selectedMode === "mega") {
          spriteUrl = data.sprites?.other?.mega?.front_default || spriteUrl;
        }

        if (selectedMode === "mega-shiny") {
          spriteUrl =
            data.sprites?.other?.mega?.front_shiny ||
            data.sprites?.other?.showdown?.front_shiny ||
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
          spriteUrl = data.sprites?.front_default || "default-sprite-url";
        }

        fetchedPokemon.push({
          ...data,
          sprite: spriteUrl,
        });
      }

      setPokemonList(fetchedPokemon);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [startIndex, startIndexMega, selectedMode]);

  useEffect(() => {
    // Adjust total pages based on selected mode
    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      setTotalPages(13); // Mega 13 mode
    } else {
      setTotalPages(51); // Default mode
    }
  }, [selectedMode]);

  const renderPageButtons = () => {
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`pageButton ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handlePageChange = (page) => {
    const newStartIndex =
      selectedMode === "mega" || selectedMode === "mega-shiny"
        ? 10001 + (page - 1) * itemsPerPage
        : (page - 1) * itemsPerPage + 1;

    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      setStartIndexMega(newStartIndex);
    } else {
      setStartIndex(newStartIndex);
    }

    setCurrentPage(page);
  };

  const navigateToDetails = (id) => {
    navigate(`/pokedetails/${id}`, {
      state: {
        startIndex,
        startIndexMega,
        selectedMode,
      },
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 className="hl" id="arcadeText">
          <span className="p"> P</span>okedex
          <div className="mew1"></div>
        </h1>
      </div>
      <div className="pageButtonsContainer" style={{ textAlign: "center" }}>
        {currentPage > 10 && (
          <button
            className="movingPageButton"
            onClick={() => handlePageChange(currentPage - 10)}
          >
            &#129168; Prev 10
          </button>
        )}
        {renderPageButtons()}
        {currentPage + 10 <= totalPages && (
          <button
            className="movingPageButton"
            onClick={() => handlePageChange(currentPage + 10)}
          >
            Next 10 &#129170;
          </button>
        )}
      </div>
      <div className="pokeCon">
        {pokemonList.length === 0 && (
          <div>
            <p style={{ fontSize: "32px", color: "blue" }}>
              <b>Loading Pokemons...</b>
            </p>
            <div className="loadingMew"></div>
          </div>
        )}
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprite={pokemon.sprite}
            onClick={() => navigateToDetails(pokemon.id, pokemon.name)}
          />
        ))}
      </div>
    </>
  );
};

export default PokeData;
