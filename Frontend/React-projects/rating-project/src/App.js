import "./App.css";
import { useState } from "react";
import Main from "./Components/Main";
import "./Components/styles/Main.css";
import Result from "./Components/Result";
import "./Components/styles/Result.css";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="App">
      {didUserSubmit ? (
        <Result userChoice={userChoice} />
      ) : (
        <Main
          userChoice={userChoice}
          updateFunction={setUserChoice}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>
  );
}

export default App;
