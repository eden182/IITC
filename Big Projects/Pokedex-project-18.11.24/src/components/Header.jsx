import { useNavigate, useLocation } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const currentRoute = location.pathname; // Extract the current path

  function handleNavigation(path) {
    navigate(path); // Navigate to the specified path
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
          onClick={() => handleNavigation("/pokedex")}
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
          onClick={() => handleNavigation("/more")}
        >
          More
        </span>
      </div>
      <div className="logo2"></div>
    </header>
  );
};

export default Header;
