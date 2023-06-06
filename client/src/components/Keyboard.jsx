import React from 'react';
import styled from 'styled-components';

const KeyRow = styled.li`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const KeyButtons = styled.button`
  width: 35px;
  height: 40px;
`;

const ClearEnterBtn = styled.button`
  width: 50px;
  height: 40px;
`;

const Keyboard = () => {

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      <KeyRow>
        <KeyButtons>Q</KeyButtons>
        <KeyButtons>W</KeyButtons>
        <KeyButtons>E</KeyButtons>
        <KeyButtons>R</KeyButtons>
        <KeyButtons>T</KeyButtons>
        <KeyButtons>Y</KeyButtons>
        <KeyButtons>U</KeyButtons>
        <KeyButtons>I</KeyButtons>
        <KeyButtons>O</KeyButtons>
        <KeyButtons>P</KeyButtons>
      </KeyRow>
      <KeyRow>
        <KeyButtons>A</KeyButtons>
        <KeyButtons>S</KeyButtons>
        <KeyButtons>D</KeyButtons>
        <KeyButtons>F</KeyButtons>
        <KeyButtons>G</KeyButtons>
        <KeyButtons>H</KeyButtons>
        <KeyButtons>J</KeyButtons>
        <KeyButtons>K</KeyButtons>
        <KeyButtons>L</KeyButtons>
      </KeyRow>
      <KeyRow>
        <ClearEnterBtn>Clear</ClearEnterBtn>
        <KeyButtons>Z</KeyButtons>
        <KeyButtons>X</KeyButtons>
        <KeyButtons>C</KeyButtons>
        <KeyButtons>V</KeyButtons>
        <KeyButtons>B</KeyButtons>
        <KeyButtons>N</KeyButtons>
        <KeyButtons>M</KeyButtons>
        <ClearEnterBtn>Enter</ClearEnterBtn>
      </KeyRow>
    </ul>
  );
};

export default Keyboard;