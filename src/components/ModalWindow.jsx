import React, { useEffect } from "react";

const ModalWindow = props => {
  const changeStatus = status => {
    if (status) {
      status = status;
      document.body.classList.add("modalOpen");
    } else {
      status = status;
      document.body.classList.remove("modalOpen");
    }
  };

  return (
    <div className="modal_container">
      <div className="header">
        <p>CONFIRM</p>
        <div onClick={() => changeStatus(false)} className="close">
          X
        </div>
        <div className="children"></div>
      </div>
    </div>
  );
};

export default ModalWindow;
