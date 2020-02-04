import React from "react";
import UpperShellImg from "../assets/Shell1.svg";
import ShellImg from "../assets/Shell2.svg";
import ModalWindow from "./ModalWindow";

const Shell = () => {
  const onOpenModal = () => {};
  return (
    <div onClick={onOpenModal} className="shell_container">
      <img className="upper_shell" src={UpperShellImg} alt="upper shell" />
      <img className="shell" src={ShellImg} alt="shell" />

      {/* <ModalWindow></ModalWindow> */}
    </div>
  );
};

export default Shell;
