import "./styles/Home.css";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const navigate = useNavigate();

  function handleCreateRoute() {
    navigate("../create");
  }

  useEffect(() => {
    const firstDivTimer = setTimeout(() => {
      setShowFirstDiv(true);
    }, 2000);

    const secondDivTimer = setTimeout(() => {
      setShowSecondDiv(true);
    }, 4000);

    return () => {
      clearTimeout(firstDivTimer);
      clearTimeout(secondDivTimer);
    };
  }, []);

  return (
    <div className="changingBackground">
      <Header />
      <div
        style={{
          marginTop: "100px",
          display: "Flex",
          justifySelf: "center",
          flexDirection: "column",
          width: "95vw",
          height: "100%",
          fontSize: "28px",
        }}
      >
        {showFirstDiv && (
          <div
            style={{
              backgroundColor: "rgba(245, 245, 245, 0.765)",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              alignSelf: "center",
            }}
          >
            <p>Hello Trainer</p>
            <div className="mew4"></div>
          </div>
        )}
        {showSecondDiv && (
          <p
            className="secondDiv"
            style={{
              backgroundColor: "rgba(245, 245, 245, 0.765)",
              padding: "10px",
              borderRadius: "5px",
              width: "60%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            In our app Shabizard you can view the pokemons and have a nice
            getaway to this world with even more options you can imagine.
          </p>
        )}
        <div className="lastDiv">
          If you want to create your own pokemon you can do it-
          <span
            className="createPokeButton"
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleCreateRoute}
          >
            here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
