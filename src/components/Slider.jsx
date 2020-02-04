import React, { useState } from "react";
import InputComponent from "./InputComponent";

const HEIGHT = 500;
const HANDLE_HALF_HEIGHT = 34;

const Slider = () => {
  const myRef = React.createRef();
  const [dragging, setDragging] = useState(false);
  const [cordY, setCordY] = useState(0);

  const _onMouseDown = event => {
    event.preventDefault();
    setDragging(true);
    console.log("MOUSE DOWN", cordY);
  };

  const _onMouseUp = () => {
    setDragging(false);
    console.log("MOUSE UP", cordY);
  };

  const _onMouseMove = event => {
    console.log("MOUSE MOVE", cordY);
    if (!dragging) return;

    const offset = event.clientY - myRef.current.getBoundingClientRect().top;
    if (offset >= 0 && offset <= HEIGHT) {
      setCordY(offset);
    } else if (offset < 0) {
      setCordY(0);
    } else if (offset > HEIGHT) {
      setCordY(HEIGHT);
    }
  };

  // const _onMouseOut = () => {
  //   setDragging(false);
  // };

  return (
    <div
      className="slider-container"
      //onMouseOut={_onMouseOut}
      onMouseMove={_onMouseMove}
    >
      <span className="slider-indicator">100</span>
      <div
        className="slider-bar-top"
        ref={myRef}
        style={{ height: `${cordY}px` }}
      >
        <div
          className="slider-handle"
          style={{ top: `${cordY - HANDLE_HALF_HEIGHT}px` }}
          onMouseDown={_onMouseDown}
          onMouseUp={_onMouseUp}
        >
          <div className="arrow" />
          <div className="handle">
            <span>{Math.abs(cordY / (HEIGHT / 100) - 100).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div
        className="slider-bar-bottom"
        style={{ height: `${HEIGHT - cordY}px` }}
      />
      <InputComponent />
    </div>
  );
};

export default Slider;
