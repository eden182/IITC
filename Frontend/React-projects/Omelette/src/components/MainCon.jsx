import React from "react";
import "./style/MainCon.css";
import "./style/Head.css";
import "./style/Prep.css";
import "./style/Content.css";
import Head from "./Head";
import Prep from "./Prep";
import Content from "./Content";

const MainCon = () => {
  return (
    <div className="mainCon">
      <Head />
      <Prep />
      <Content />
    </div>
  );
};

export default MainCon;
