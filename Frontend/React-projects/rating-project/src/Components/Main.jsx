import React, { useState } from "react";
import myLogo from "../assets/images/icon-star.svg";

const Main = (props) => {
  const [selectedChoice, setSelectedChoice] = useState(0);

  const updateChoice = (e) => {
    const choice = e.target.innerText;
    setSelectedChoice(choice);
    props.updateFunction(choice);
  };

  const userSub = () => {
    if (selectedChoice) {
      props.setDidUserSubmit(true);
    } else {
      alert("Please select a rating");
    }
  };

  return (
    <div className="mainCon">
      <div class="ball" id="ll">
        <img src={myLogo} className="logo" />
      </div>
      <h1 className="hl">How did we do?</h1>
      <p className="p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratingCon">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`ball ${selectedChoice == rating ? "selected" : ""}`}
            onClick={updateChoice}
          >
            {rating}
          </span>
        ))}
      </div>
      <button className="sub" onClick={userSub}>
        Submit
      </button>
    </div>
  );
};

export default Main;
