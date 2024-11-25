import "./styles/Header.css";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="menu" onClick={openMenu}>
        <div className={`menuOpen ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
