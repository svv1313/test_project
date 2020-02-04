import React, { useState } from "react";

const HEIGHT = 500;
const HANDLE_HALF_HEIGHT = 34;

const Slider = () => {
  const sliderRef = React.createRef();
  const [dragging, setDragging] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const _onMouseDown = event => {
    event.preventDefault();
    setDragging(true);
    console.log("MOUSE DOWN", topOffset);
  };

  const _onMouseUp = () => {
    setDragging(false);
    console.log("MOUSE UP", topOffset);
  };

  const _onMouseMove = event => {
    console.log("MOUSE MOVE", topOffset);
    if (!dragging) return;

    const offset =
      event.clientY - sliderRef.current.getBoundingClientRect().top;
    if (offset >= 0 && offset <= HEIGHT) {
      setTopOffset(offset);
    } else if (offset < 0) {
      setTopOffset(0);
    } else if (offset > HEIGHT) {
      setTopOffset(HEIGHT);
    }
  };

  const currentIndicatorNumber = Math.abs(topOffset / (HEIGHT / 100) - 100).toFixed(2);
  const handlePosition = topOffset - HANDLE_HALF_HEIGHT;
  const barBottomHeight = HEIGHT - topOffset;

  return (
    <div className="slider-container" onMouseMove={_onMouseMove}>
      <div className="indicators-container" style={{ height: `${HEIGHT}px` }}>
        <span className="slider-indicator">100</span>
        <span className="slider-indicator">0</span>
      </div>
      <div className="slider" ref={sliderRef}>
        <div className="slider-bar-top" style={{ height: `${topOffset}px` }}>
          <div
            className="slider-handle"
            style={{ top: `${handlePosition}px` }}
            onMouseDown={_onMouseDown}
            onMouseUp={_onMouseUp}>
            <div className="arrow" />
            <div className="handle">
              <span>{currentIndicatorNumber}</span>
            </div>
          </div>
        </div>
        <div
          className="slider-bar-bottom"
          style={{ height: `${barBottomHeight}px` }}
        />
      </div>
    </div>
  );
};

export default Slider;
