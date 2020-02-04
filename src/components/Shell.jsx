import React, { Component, Fragment } from "react";
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
      document.body.classList.remove("modalOpen");
    }

    this.setState(prev => ({ statusModal: !prev.statusModal }));
  };

  render() {
    return (
      <Fragment>
        <div
          className="shell_container"
          onClick={() => {
            this.onClickModal();
          }}
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
