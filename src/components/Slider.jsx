import React, { useState } from 'react'
import Counter from './Counter'

const Slider = () => {
    const [dragging, setDragging] = useState(false);
    const [cordY, setCordY] = useState(500);
    const [originY, setOriginY] = useState(0);
    const [counter, setCounter] = useState(0);

    const _onMouseDown = event => {
        setOriginY(event.clientY);
        setDragging(true);
    }

    const _onMouseUp = () => {
        setDragging(false);
        console.log('MOUSE UP',cordY);
    }

    const _onMouseMove = event => {
      if (dragging) {
        const deltaY = Math.abs(event.clientY -  Math.abs(originY - 500));
        setCounter(((500 - cordY) / 10) * 2);
        if (deltaY) {
            console.log(event.clientY, originY);
          setCordY(deltaY);
        }
        console.log(counter)
      }
    };


    return (
      <div className="slider_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="207"
          height="650"
          style={{ userSelect: "none" }}
        >
          <rect
            x="-10"
            width="107"
            height={Math.abs(cordY - 590)}
            fill="#FA6868"
          />
          <rect
            x="-10"
            width="107"
            height={590}
            fill="#6FF48D"
          />
          <Counter
            cordY={cordY}
            onMouseDown={_onMouseDown}
            onMouseMove={_onMouseMove}
            onMouseUp={_onMouseUp}
          />
        </svg>
      </div>
    );
}

export default Slider;