import React from "react";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({ id, name, types, sprite }) => {
  const primaryType = types[0]?.type.name;

  const navigate = useNavigate();
  function handleCard() {
    navigate("../cardDetails");
  }

  return (
    <div className="pokemon-card" data-type={primaryType} onClick={handleCard}>
      <h2 className="pokemonName">
        {name.charAt(0).toUpperCase() + name.slice(1)}
        <p className="pokemonNumber">#{id}</p>
      </h2>
      <img src={sprite} alt={`${name} sprite`} className="pokemonSprite" />
      <div className="pokemonTypes">
        {types.map((type) => (
          <span key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
