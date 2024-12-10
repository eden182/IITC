import React from "react";

function ConditionalsComponent() {
  const isActive = true;
  const shouldShow = true;

  if (!shouldShow) {
    return "nope!";
  }

  return <div className={isActive && "active"}>Babi</div>;
  return <div className={isActive ? "active" : ""}>Babi</div>;
}

export default ConditionalsComponent;
