import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import "./components/styles/App.css";
import Pokedex from "./components/Pokedex.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} /> */
}
