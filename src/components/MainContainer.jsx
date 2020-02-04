import React from "react";
import MainItemContainer from "../shared/MainItemContainer";
import Slider from "./Slider";
import Shell from "./Shell";

const MainContainer = () => {
  return (
    <main>
      <MainItemContainer>
        <Slider />
      </MainItemContainer>
      <MainItemContainer>{/* Table */}</MainItemContainer>
      <MainItemContainer>
        <Shell />
      </MainItemContainer>
    </main>
  );
};

export default MainContainer;
