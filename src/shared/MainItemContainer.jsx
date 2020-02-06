import React from "react";
import PropTypes from "prop-types";

const MainItemContainer = ({ name = "", children }) => {
  return <div className={`main_item_container ${name}`}>{children}</div>;
};

MainItemContainer.protoType = {
  children: PropTypes.element
};

export default MainItemContainer;
