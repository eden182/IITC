import React from "react";
// components
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import PokeData from "../components/PokeData.jsx";

const Pokedex = () => {
  return (
    <div>
      <Menu />
      <Header />
      <PokeData />
    </div>
  );
};

export default Pokedex;
