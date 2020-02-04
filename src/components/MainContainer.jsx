import React from 'react';
import MainItemContainer from '../shared/MainItemContainer';
import Slider from './Slider';

const MainContainer = () => {
    return (
      <main>
        <MainItemContainer>
          <Slider />
        </MainItemContainer>
        <MainItemContainer>
          <Slider />
        </MainItemContainer>
        <MainItemContainer>
          <Slider />
        </MainItemContainer>
      </main>
    );
}

export default MainContainer;