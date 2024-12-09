import React from 'react';
import './Home.css'
import LeftSide from './leftSide';  // ייבוא של LeftSide
import MiddleSide from './middleSide'; // ייבוא של MiddleSide
import RightSide from './rightSide'; // ייבוא של RightSide

const Home = () => {
  return (
    <div className="App">
      {/* LeftSide מוצג תמיד */}
      <div className="leftSideHome">
        <LeftSide />
      </div>

      {/* MiddleSide - כאן יציג את התוכן של הדף */}
      <div className="middleSide">
        <MiddleSide />
      </div>

      {/* RightSide מוצג רק בדף הראשי */}
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
