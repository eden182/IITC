import { useNavigate, useLocation } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <header>
      <div className="navButtonsCon">
        <span
          className={`navButton ${currentRoute === "/" ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </span>
        <span
          className={`navButton ${currentRoute === "/pokedex" ? "active" : ""}`}
          onClick={() => handleNavigation("/pokedex/1")}
        >
          Pokedex
        </span>
        <span
          className={`navButton ${
            currentRoute === "/poke-search" ? "active" : ""
          }`}
          onClick={() => handleNavigation("/poke-search")}
        >
          Search
        </span>
        <span
          className={`navButton ${currentRoute === "/more" ? "active" : ""}`}
          // onClick={() => handleNavigation("/more")}
        >
          More
        </span>
      </div>
      <div className="logo2"></div>
    </header>
  );
};

export default Header;
