import React, { useState } from 'react';
import styled from 'styled-components';

const GameInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ScoreBox = styled.div`
  border: 2px solid black;
  padding: 5px 15px 5px 5px;
`;

const LoginBox = styled.div`
  border: 2px solid black;
  padding: 5px;
`;

const GameInfo = () => {

  return (
    <GameInfoContainer>
      <ScoreBox>
        <div>Wins:</div>
        <div>Losses:</div>
      </ScoreBox>
      <h1>Wordle Clone</h1>
      <LoginBox>Log In</LoginBox>
    </GameInfoContainer>
  );
};

export default GameInfo;