import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    type: "",
    stats: { hp: 0, attack: 0, defense: 0 },
    abilities: [],
    sprite: "",
  });
  const navigate = useNavigate();

  // Load Pokémon list from local
  useEffect(() => {
    const savedPokemons =
      JSON.parse(localStorage.getItem("personalPokemons")) || [];
    setPokemonList(savedPokemons);
  }, []);

  // Save Pokémon list to local storage
  const saveToLocalStorage = (pokemons) => {
    localStorage.setItem("personalPokemons", JSON.stringify(pokemons));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setPokemonData((prevData) => ({
      ...prevData,
      stats: {
        ...prevData.stats,
        [name]: parseInt(value) || 0,
      },
    }));
  };

  const handleAddAbility = () => {
    const ability = prompt("Enter an ability:");
    if (ability) {
      setPokemonData((prevData) => ({
        ...prevData,
        abilities: [...prevData.abilities, ability],
      }));
    }
  };

  const handleCreatePokemon = (e) => {
    e.preventDefault();
    if (!pokemonData.name || !pokemonData.type || pokemonData.sprite === "") {
      alert("Please fill out all required fields.");
      return;
    }

    const newPokemonList = [...pokemonList, pokemonData];
    setPokemonList(newPokemonList);
    saveToLocalStorage(newPokemonList);

    // Reset form
    setPokemonData({
      name: "",
      type: "",
      stats: { hp: 0, attack: 0, defense: 0 },
      abilities: [],
      sprite: "",
    });
  };

  const handleDeletePokemon = (index) => {
    const updatedList = pokemonList.filter((_, i) => i !== index);
    setPokemonList(updatedList);
    saveToLocalStorage(updatedList);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        marginTop: "50px",
      }}
    >
      <h1>Create Your Pokémon</h1>
      <form onSubmit={handleCreatePokemon}>
        <div>
          <label>Pokemon Name:</label>
          <input
            type="text"
            name="name"
            value={pokemonData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={pokemonData.type}
            onChange={handleInputChange}
            placeholder="e.g., Fire, Water"
            required
          />
        </div>
        <div>
          <label>Sprite URL:</label>
          <input
            type="text"
            name="sprite"
            value={pokemonData.sprite}
            onChange={handleInputChange}
            placeholder="Link to the Pokémon's image"
            required
          />
        </div>
        <div>
          <h3>Stats</h3>
          <label>HP:</label>
          <input
            type="number"
            name="hp"
            value={pokemonData.stats.hp}
            onChange={handleStatsChange}
          />
          <br />
          <label>Attack:</label>
          <input
            type="number"
            name="attack"
            value={pokemonData.stats.attack}
            onChange={handleStatsChange}
          />
          <br />
          <label>Defense:</label>
          <input
            type="number"
            name="defense"
            value={pokemonData.stats.defense}
            onChange={handleStatsChange}
          />
        </div>
        <div>
          <h3>Abilities</h3>
          <button type="button" onClick={handleAddAbility}>
            Add Ability
          </button>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Create Pokémon</button>
      </form>
      <button className="back-button" onClick={handleGoBack}>
        &#8592;
      </button>
      <h2>Your Personal Pokémon</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemonList.map((pokemon, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              textAlign: "center",
              width: "200px",
            }}
          >
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{pokemon.name}</h3>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.stats.hp}</p>
            <p>Attack: {pokemon.stats.attack}</p>
            <p>Defense: {pokemon.stats.defense}</p>
            <h4>Abilities:</h4>
            <ul>
              {pokemon.abilities.map((ability, i) => (
                <li key={i}>{ability}</li>
              ))}
            </ul>
            <button onClick={() => handleDeletePokemon(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePokemon;
