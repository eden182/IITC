import React, { useState } from "react";
// components
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import PokeData from "../components/PokeData.jsx";

const Pokedex = () => {
  const [selectedMode, setSelectedMode] = useState("");
  return (
    <div>
      <Menu onSelectMode={setSelectedMode} />
      <Header />
      <PokeData selectedMode={selectedMode} />
    </div>
  );
};

export default Pokedex;
