import React from "react";
import warning from "../assets/warning.svg";

const ModalWindow = ({ onClose, show }) => {
  if (!show) return null;
  return (
    <div className="backdrop">
      <div className="modal_container">
        <div className="header">
          <div className="header_icon">
            <img src={warning} alt={warning} />
            <p>CONFIRM</p>
          </div>
          <div onClick={onClose} className="close">
            X
          </div>
        </div>
        <div className="children">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem
          cum quos veritatis nemo itaque iure ratione in molestiae, illum vitae
          enim dicta tempora fugit, dolorem omnis autem eos! Aperiam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Error, eius iste
          ipsum in adipisci maxime officia harum, perspiciatis excepturi ipsa
          expedita voluptate! Labore officiis inventore ullam sapiente, fuga
          omnis eum.
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
