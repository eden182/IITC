import "./App.css";
import { useState } from "react";
import myLogo from "./assets/images/logo192.png";
import FormCom from "./commponents/FormCom.jsx";
import "./commponents/styles/FormCom.css";
import ResultCom from "./commponents/ResultCom.jsx";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const decrease = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div className="App">
      <div className="logoCon">
        <img src={myLogo} className="logo" />
      </div>
      <h1 className="hl">my counter app</h1>
      <div className="counterCon">
        <button className="but" onClick={decrease}>
          -
        </button>
        <p className="count">{counter}</p>
        <button className="but" onClick={increase}>
          +
        </button>
      </div>
      <div>
        <h1 className="HL">Choose a number</h1>
        {didUserSubmit ? (
          <ResultCom userChoice={userChoice} />
        ) : (
          <FormCom
            updateFunction={setUserChoice}
            setDidUserSubmit={setDidUserSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
