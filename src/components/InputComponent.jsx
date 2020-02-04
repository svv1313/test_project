import React from "react";

const InputComponent = () => {
  const inpRef = React.createRef();

  const _divide = () => {
    const result = inpRef.current.value / 2;
    inpRef.current.value = result;
  };
  const _multiply = () => {
    const result = inpRef.current.value * 2;
    inpRef.current.value = result;
  };

  return (
    <div className="input_container">
      <div className="input_item">
        <p>BET AMOUNT</p>
        <div className="input">
          <img
            className="icon"
            src="https://img.icons8.com/windows/32/000000/bitcoin.png"
            alt="bit_coin"
          />
          <form>
            <input type="number" ref={inpRef} />
          </form>
        </div>
      </div>
      <button onClick={_divide} className="math_btn divide">
        1/2
      </button>
      <button onClick={_multiply} className="math_btn multiply">
        x2
      </button>
    </div>
  );
};

export default InputComponent;
