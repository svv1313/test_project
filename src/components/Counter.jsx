import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps) {
    const oldY = prevProps.cordY;
    const newY = this.props.cordY
    try {
      const counterElement = document.getElementById("counter");
      counterElement.animate(
        [
          { transform: `translateY(${oldY}px)` },
          { transform: `translateY(${newY}px)` }
        ],
        {
          duration: 200,
          iterations: 1
        }
      );
      counterElement.style.transform = `translateY(${newY}px)`;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <g
        style={{ userSelect: "none" }}
        id="counter"
        onMouseDown={this.props.onMouseDown}
        onMouseMove={this.props.onMouseMove}
        onMouseUp={this.props.onMouseUp}
        onBlur={this.props.onMouseUp}
      >
        <path d="M43.814,68.818h-.107v-.084L0,34.41,43.708.088V0h.108l0,0V0H138a8,8,0,0,1,8,8V60.818a8,8,0,0,1-8,8H43.846v.025Z" />
      </g>
    );
  }
};

export default Counter;