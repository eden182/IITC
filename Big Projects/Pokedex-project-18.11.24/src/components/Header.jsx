import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <div className="navButtonsCon">
        <span className="navButton">Home</span>
        <span className="navButton">Pokedex</span>
        <span className="navButton">About Us</span>
        <span className="navButton" id="but4">
          More
        </span>
      </div>

      <div className="logo2"></div>
    </header>
  );
};

export default Header;
