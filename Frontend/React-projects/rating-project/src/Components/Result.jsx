import React from "react";
import Ill from "../assets/images/illustration-thank-you.svg";

const Result = (props) => {
  return (
    <div class="container" id="con-2">
      <img src={Ill} alt="insert photo" class="pic2" />
      <div class="select">
        <p id="sel">You selected out: {props.userChoice} of 5</p>
      </div>
      <h1 id="HL">Thank you!</h1>
      <p id="p2">
        We appreciate you taking the time to give a rating. if you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Result;
