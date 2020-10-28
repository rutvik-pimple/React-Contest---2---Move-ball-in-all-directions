import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };
  const start = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    }
    //  else
    //   return (
    //     <button onClick={this.buttonClickHandler}>Click For One Ball</button>
    //   );
  };

  const handleKey = (event) => {
    const copyBallPosition = new Object();
    if (event.keyCode === 39) {
      const copyX = x + 5;
      setX(copyX);
      const val = copyX + "px";
      copyBallPosition.left = val;
      copyBallPosition.top = ballPosition.top;
      setBallPosition(copyBallPosition);
    } else if (event.keyCode === 40) {
      const copyY = y + 5;
      setY(copyY);
      const val = copyY + "px";
      copyBallPosition.top = val;
      copyBallPosition.left = ballPosition.left;
      setBallPosition(copyBallPosition);
    } else if (event.keyCode === 38) {
      const copyY = y - 5;
      setY(copyY);
      const val = copyY + "px";
      copyBallPosition.top = val;
      copyBallPosition.left = ballPosition.left;
      setBallPosition(copyBallPosition);
    } else if (event.keyCode === 37) {
      const copyX = x - 5;
      setX(copyX);
      const val = copyX + "px";
      copyBallPosition.left = val;
      copyBallPosition.top = ballPosition.top;
      setBallPosition(copyBallPosition);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {!renderBall ? (
        <button onClick={start} className="start">
          Start
        </button>
      ) : null}

      {renderChoice()}
    </div>
  );
};

export default App;
