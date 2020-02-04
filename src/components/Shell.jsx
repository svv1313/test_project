import React, { Component, useState, Fragment } from "react";
import UpperShellImg from "../assets/Shell1.svg";
import ShellImg from "../assets/Shell2.svg";
import ModalWindow from "./ModalWindow";

class Shell extends Component {
  state = {
    statusModal: false
  };

  onClickModal = status => {
    if (status) {
      document.body.classList.add("modalOpen");
    } else {
      console.log(5);
      document.body.classList.remove("modalOpen");
    }

    this.setState(prev => ({ statusModal: !prev.statusModal }));
  };

  render() {
    return (
      <Fragment>
        <div
          onClick={() => {
            this.onClickModal();
          }}
          className="shell_container"
        >
          <img className="upper_shell" src={UpperShellImg} alt="upper shell" />
          <img className="shell" src={ShellImg} alt="shell" />
        </div>
        <ModalWindow
          show={this.state.statusModal}
          onClose={() => {
            this.onClickModal();
          }}
        />
      </Fragment>
    );
  }
}

export default Shell;
