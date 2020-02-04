import React from "react";
import PropTypes from "prop-types";

const MainItemContainer = ({ children }) => {
  return <div className="main_item_container">{children}</div>;
};

MainItemContainer.protoType = {
  children: PropTypes.element
};

export default MainItemContainer;
