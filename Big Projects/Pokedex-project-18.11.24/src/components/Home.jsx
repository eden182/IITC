import "./styles/Home.css";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const navigate = useNavigate();

  const sentences = [
    "Hello Trainer! my name is professor Oak",
    "In our app Shabizard, you can view the pokemons and have a nice getaway to this world.",
    "Explore even more options than you can imagine!",
    <>
      Click{" "}
      <span
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => navigate("../profile")}
      >
        here
      </span>{" "}
      to create a profile and join the fight!
    </>,
  ];

  function handleCreateRoute() {
    navigate("../create");
  }

  useEffect(() => {
    if (currentSentenceIndex < sentences.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentSentenceIndex, sentences.length]);

  return (
    <div className="changingBackground">
      <Header />
      <div
        style={{
          marginTop: "100px",
          display: "Flex",
          justifySelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "95vw",
          height: "100%",
          fontSize: "23px",
        }}
      >
        <div className="mainDiv">
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="oakText">{sentences[currentSentenceIndex]}</p>
            <div className="oak"></div>
          </div>
        </div>
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
