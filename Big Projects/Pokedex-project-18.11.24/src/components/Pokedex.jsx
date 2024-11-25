import React from "react";
// components
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import PokeData from "../components/PokeData.jsx";
import PokeSearch from "../components/PokeSearch.jsx";

const Pokedex = () => {
  return (
    <div>
      <Menu />
      <Header />
      <PokeData />
      <PokeSearch />
    </div>
  );
};

export default Pokedex;
