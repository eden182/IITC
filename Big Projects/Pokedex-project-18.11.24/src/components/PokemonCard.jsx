import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PokemonCard = ({ id, name, types, sprite }) => {
  const primaryType = types[0]?.type.name;
  const navigate = useNavigate();
  const location = useLocation();

  function handleCard() {
    navigate(`../poke-details/${name}`, {
      state: {
        ...location.state,
        activePokemonId: id,
      },
    });
  }

  return (
    <div
      onClick={handleCard}
      className="pokemon-card"
      data-type={primaryType}
      style={{
        backgroundColor: `var(--${primaryType}-bg)`,
        boxShadow: `5px 5px 10px var(--${primaryType}-shadow)`,
      }}
    >
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
