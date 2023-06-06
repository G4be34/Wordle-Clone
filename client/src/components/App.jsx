import React, { useState } from 'react';
import GameInfo from './GameInfo';
import Keyboard from './Keyboard';
import WordBox from './WordBox';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 500px;
  margin: auto;
`;

export default function App() {
  return (
    <GameContainer>
      <GameInfo />
      <WordBox />
      <Keyboard />
    </GameContainer>
  );
}