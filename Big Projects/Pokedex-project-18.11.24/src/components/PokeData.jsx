import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonCard from "./PokemonCard.jsx";
import useFetchPokemon from "./FetchAll.jsx";
import "./styles/PokeData.css";

const PokeData = ({ selectedMode }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const { legendaryPokemon } = useFetchPokemon();
  console.log("Legendary Pokémon Data:", legendaryPokemon);

  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState(
    () => parseInt(localStorage.getItem("currentPage")) || parseInt(page) || 1
  );
  const [totalPages, setTotalPages] = useState(51);

  const itemsPerPage = 20;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (selectedMode === "mega" || selectedMode === "mega-shiny") {
      setTotalPages(Math.ceil((10277 - 10001 + 1) / itemsPerPage));
    } else {
      setTotalPages(52);
    }
  }, [selectedMode]);

  useEffect(() => {
    const fetchPokemons = async () => {
      console.log("Fetching Pokémon data... Mode:", selectedMode);
      if (selectedMode === "L-M") {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedLegends = legendaryPokemon.slice(
          startIndex,
          startIndex + itemsPerPage
        );

        // Log the paginated data to verify it
        console.log("Paginated Legendary Pokémon:", paginatedLegends);

        setPokemonList(paginatedLegends);
        setTotalPages(Math.ceil(legendaryPokemon.length / itemsPerPage));
        return;
      }

      const fetchedPokemon = [];
      let fetchStartIndex = (currentPage - 1) * itemsPerPage + 1;
      let fetchEndIndex = fetchStartIndex + itemsPerPage - 1;

      // Adjust for 'mega' or 'mega-shiny' mode
      if (selectedMode === "mega" || selectedMode === "mega-shiny") {
        fetchStartIndex = 10001 + (currentPage - 1) * itemsPerPage;
        fetchEndIndex = Math.min(fetchStartIndex + itemsPerPage - 1, 10277);
      }

      for (let i = fetchStartIndex; i <= fetchEndIndex; i++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          const data = response.data;

          const speciesResponse = await axios.get(data.species.url);
          const speciesData = speciesResponse.data;

          let spriteUrl =
            data.sprites?.other?.showdown?.front_default ||
            data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
              ?.front_default ||
            data.sprites?.front_default;

          // Apply sprite selection logic based on selected mode
          if (selectedMode === "mega") {
            spriteUrl =
              data.sprites?.other?.showdown?.front_default || spriteUrl;
          } else if (selectedMode === "mega-shiny") {
            spriteUrl = data.sprites?.other?.showdown?.front_shiny || spriteUrl;
          } else if (selectedMode === "back") {
            spriteUrl =
              data.sprites?.other?.showdown?.back_default || spriteUrl;
          } else if (selectedMode === "shiny-back") {
            spriteUrl = data.sprites?.other?.showdown?.back_shiny || spriteUrl;
          } else if (selectedMode === "shiny") {
            spriteUrl = data.sprites?.other?.showdown?.front_shiny || spriteUrl;
          }

          const pokemonData = {
            ...data,
            sprite: spriteUrl,
          };

          fetchedPokemon.push(pokemonData);
        } catch (fetchError) {
          console.warn(`Skipping invalid Pokémon ID: ${i}`);
          continue;
        }
      }

      setPokemonList(fetchedPokemon);
    };

    fetchPokemons();
  }, [currentPage, selectedMode, legendaryPokemon]);

  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    setCurrentPage(page);
    navigate(`/pokedex/${page}`);
  };

  const renderPageButtons = () => {
    const buttons = [];
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

  const navigateToDetails = (id) => {
    navigate(`/pokedetails/${id}`, {
      state: {
        currentPage,
        selectedMode,
      },
    });
  };

  console.log(pokemonList);

  return (
    <>
      <div
        className="pageButtonsContainer"
        style={{ textAlign: "center", marginTop: "150px" }}
      >
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
              <b>No Pokémon found.</b>
            </p>
          </div>
        )}
        {pokemonList.map((pokemon) => (
          <PokemonCard
            className="pokemon-card"
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprite={pokemon.sprite}
            onClick={() => navigateToDetails(pokemon.id)}
          />
        ))}
      </div>
    </>
  );
};

export default PokeData;
