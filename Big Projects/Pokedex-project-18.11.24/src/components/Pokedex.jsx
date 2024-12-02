import React, { useState, useEffect } from "react";
// components
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import PokeData from "../components/PokeData.jsx";

const Pokedex = () => {
  const savedMode = localStorage.getItem("selectedMode") || "default";
  const [selectedMode, setSelectedMode] = useState(savedMode);

  useEffect(() => {
    // Save selected mode to localStorage whenever it changes
    localStorage.setItem("selectedMode", selectedMode);
  }, [selectedMode]);

  return (
    <div>
      <Menu onSelectMode={setSelectedMode} />
      <Header />
      <PokeData selectedMode={selectedMode} />
    </div>
  );
};

export default Pokedex;
