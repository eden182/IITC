import React from 'react';
import LeftSide from '../HomeFile/leftSide'; // LeftSide

const Message = () => {
  return (
    <div className="App">
      {/* LeftSide מוצג תמיד */}
      <div className="leftSideHome">
        <LeftSide />
      </div>

      {/* MiddleSide - כאן יציג את התוכן של הדף */}
      <div className="middleSide">
        <p>Message page content</p> {/* כאן יציג את התוכן של הדף Search */}
      </div>

      {/* אין הצגה של RightSide */}
    </div>
  );
};

export default Message;