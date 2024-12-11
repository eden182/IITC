import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";
import "./styles/PokeData.css";

const PokeData = ({ selectedMode }) => {
  const [pokemonList, setPokemonList] = useState([]);
  // for page remembering
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
  // for pokemon cards
  const itemsPerPage = 20;
  const navigate = useNavigate();
  // for mega
  useEffect(() => {
    // Save startIndex and currentPage to localStorage
    localStorage.setItem("startIndex", startIndex);
    localStorage.setItem("startIndexMega", startIndexMega);
    localStorage.setItem("currentPage", currentPage);
  }, [startIndex, startIndexMega, currentPage]);

  // axios fetch Sprite
  const fetchPokemons = async () => {
    try {
      const fetchedPokemon = [];
      let fetchStartIndex = startIndex;
      let fetchEndIndex = startIndex + itemsPerPage - 1;

      if (selectedMode === "mega" || selectedMode === "mega-shiny") {
        fetchStartIndex = startIndexMega;
        fetchEndIndex = fetchStartIndex + itemsPerPage - 1;
      }

      // Fetch the Pokémon data
      for (let i = fetchStartIndex; i <= fetchEndIndex; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const data = response.data;

        const speciesResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );
        const speciesData = speciesResponse.data;

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

        fetchedPokemon.push({
          ...data,
          sprite: spriteUrl,
          is_legendary: speciesData.is_legendary,
          is_mythical: speciesData.is_mythical,
        });
      }

      // After fetching all Pokémon, filter out Legendary and Mythical Pokémon (if L-M mode)
      if (selectedMode === "L-M") {
        const filteredPokemon = fetchedPokemon.filter(
          (pokemon) => pokemon.is_legendary || pokemon.is_mythical
        );
        console.log("Filtered Pokémon (L-M):", filteredPokemon);
        setPokemonList(filteredPokemon); // Set filtered L-M Pokémon to the state
      } else {
        setPokemonList(fetchedPokemon); // Set all Pokémon if not L-M mode
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [startIndex, startIndexMega, selectedMode]);

  // menu modes
  useEffect(() => {
    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      setTotalPages(13); // Mega 13 mode
    }
    // else if (selectedMode === "L-M") {
    //   setTotalPages(10);}
    else {
      setTotalPages(51); // Default mode
    }
  }, [selectedMode]);

  const renderPageButtons = () => {
    const buttons = [];
    // Show up to 3 buttons: previous, current, next
    if (currentPage > 1) {
      buttons.push(
        <button
          key={currentPage - 1}
          className="pageButton"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      );
    }

    buttons.push(
      <button key={currentPage} className="pageButton active">
        {currentPage}
      </button>
    );

    if (currentPage < totalPages) {
      buttons.push(
        <button
          key={currentPage + 1}
          className="pageButton"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {currentPage + 1}
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
      <div
        className="pageButtonsContainer"
        style={{ textAlign: "center", marginTop: "150px" }}
      >
        {" "}
        {currentPage > 10 && (
          <button
            className="movingPageButton"
            onClick={() => handlePageChange(currentPage - 10)}
          >
            &#129168; Prev 10
          </button>
        )}
        {renderPageButtons()}
        ...
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
