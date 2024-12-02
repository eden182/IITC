import "./styles/Header.css";
import { useState } from "react";

const Menu = ({ onSelectMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSelectMode = (mode) => {
    onSelectMode(mode); // Call the parent's function to update the mode
    setIsMenuOpen(false); // Close the menu after selecting a mode
  };

  return (
    <div>
      <div className="menu" onClick={openMenu}>
        <div className={`menuOpen ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("default");
              }}
            >
              Default
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("back");
              }}
            >
              Back
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("shiny");
              }}
            >
              Shiny ✨
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("shiny-back");
              }}
            >
              Shiny <br /> Back ✨
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("mega");
              }}
            >
              Other + evolve
            </li>
            <li
              id="lastLi"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectMode("mega-shiny");
              }}
            >
              Other + evolve
              <br />
              Shiny ✨
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
