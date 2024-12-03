import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import "./components/styles/App.css";
import Pokedex from "./components/Pokedex.jsx";
import CardDetails from "./components/CardDetails.jsx";
import PokeSearch from "./components/PokeSearch.jsx";
import Home from "./components/Home.jsx";
import CreatePokemon from "./components/Create.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/poke-details/:name" element={<CardDetails />} />
          <Route path="/poke-search" element={<PokeSearch />} />
          <Route path="/create" element={<CreatePokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
