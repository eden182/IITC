import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import "./components/styles/App.css";
import Pokedex from "./components/Pokedex.jsx";
import CardDetails from "./components/CardDetails.jsx";
import PokeSearch from "./components/PokeSearch.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/poke-search" element={<PokeSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// fetch('https://pokeapi.co/api/v2/evolution-chain/1/')
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://pokeapi.co/api/v2/pokemon-species/6/')
//   .then(res => res.json())
//   .then(data => console.log(data.varieties));
