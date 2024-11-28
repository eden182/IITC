import "./styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleHome() {
    navigate("../");
  }

  function handleSearch() {
    navigate("../poke-search");
  }

  function handlePokedex() {
    navigate("../pokedex");
  }

  return (
    <header>
      <div className="navButtonsCon">
        <span className="navButton" onClick={handleHome}>
          Home
        </span>
        <span className="navButton" onClick={handlePokedex}>
          Pokedex
        </span>
        <span className="navButton" onClick={handleSearch}>
          search
        </span>
        <span className="navButton" id="but4">
          More
        </span>
      </div>
      <div className="logo2"></div>
    </header>
  );
};

export default Header;
