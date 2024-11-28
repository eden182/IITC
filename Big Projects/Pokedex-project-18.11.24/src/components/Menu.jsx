import "./styles/Header.css";
import { useState } from "react";

const Menu = ({ onSelectMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSelectMode = (mode) => {
    onSelectMode(mode);
    setIsMenuOpen(false); // Close menu after selecting
  };

  return (
    <div>
      <div className="menu" onClick={openMenu}>
        <div className={`menuOpen ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => handleSelectMode("default")}>Default</li>
            <li onClick={() => handleSelectMode("back")}>Back</li>
            <li onClick={() => handleSelectMode("shiny")}>Shiny ✨</li>
            <li onClick={() => handleSelectMode("shiny-back")}>
              Shiny <br /> Back ✨
            </li>
            <li onClick={() => handleSelectMode("mega")}>
              Next gen
              <br />
              (Mega / <br /> Alolan)
            </li>
            <li id="lastLi" onClick={() => handleSelectMode("mega-shiny")}>
              Next gen <br />
              Shiny ✨
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
