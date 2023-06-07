import React from 'react';
import styled from 'styled-components';

const KeyRow = styled.li`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const KeyButtons = styled.button`
  width: 45px;
  height: 50px;
`;

const ClearEnterBtn = styled.button`
  width: 60px;
  height: 50px;
`;

const KeyRowsContainer = styled.ul`
  margin: 10px 0 0 0;
  padding: 0;
`;

const Keyboard = ({setRow1, setRow2, setRow3, setRow4, setRow5, setRow6, rowNumber, submitWord, deleteLetter }) => {

  const insertLetter = (e) => {
    const typedLetter = e.target.textContent;
    console.log('Typed letter is: ', typedLetter);
    if (rowNumber === 1) {
      setRow1((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    } else if (rowNumber === 2) {
      setRow2((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    } else if (rowNumber === 3) {
      setRow3((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    } else if (rowNumber === 4) {
      setRow4((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    } else if (rowNumber === 5) {
      setRow5((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    } else if (rowNumber === 6) {
      setRow6((prevRow) => {
        if (prevRow.length < 5) {
          return [...prevRow, typedLetter];
        } else {
          console.log("Previous row: ", prevRow);
          return [...prevRow];
        }
      });
    }
  };

  return (
    <KeyRowsContainer>
      <KeyRow>
        <KeyButtons onClick={insertLetter}>Q</KeyButtons>
        <KeyButtons onClick={insertLetter}>W</KeyButtons>
        <KeyButtons onClick={insertLetter}>E</KeyButtons>
        <KeyButtons onClick={insertLetter}>R</KeyButtons>
        <KeyButtons onClick={insertLetter}>T</KeyButtons>
        <KeyButtons onClick={insertLetter}>Y</KeyButtons>
        <KeyButtons onClick={insertLetter}>U</KeyButtons>
        <KeyButtons onClick={insertLetter}>I</KeyButtons>
        <KeyButtons onClick={insertLetter}>O</KeyButtons>
        <KeyButtons onClick={insertLetter}>P</KeyButtons>
      </KeyRow>
      <KeyRow>
        <KeyButtons onClick={insertLetter}>A</KeyButtons>
        <KeyButtons onClick={insertLetter}>S</KeyButtons>
        <KeyButtons onClick={insertLetter}>D</KeyButtons>
        <KeyButtons onClick={insertLetter}>F</KeyButtons>
        <KeyButtons onClick={insertLetter}>G</KeyButtons>
        <KeyButtons onClick={insertLetter}>H</KeyButtons>
        <KeyButtons onClick={insertLetter}>J</KeyButtons>
        <KeyButtons onClick={insertLetter}>K</KeyButtons>
        <KeyButtons onClick={insertLetter}>L</KeyButtons>
      </KeyRow>
      <KeyRow>
        <ClearEnterBtn style={{ marginRight: '5px' }} onClick={deleteLetter}>Clear Prev</ClearEnterBtn>
        <KeyButtons onClick={insertLetter}>Z</KeyButtons>
        <KeyButtons onClick={insertLetter}>X</KeyButtons>
        <KeyButtons onClick={insertLetter}>C</KeyButtons>
        <KeyButtons onClick={insertLetter}>V</KeyButtons>
        <KeyButtons onClick={insertLetter}>B</KeyButtons>
        <KeyButtons onClick={insertLetter}>N</KeyButtons>
        <KeyButtons onClick={insertLetter}>M</KeyButtons>
        <ClearEnterBtn style={{ marginLeft: '5px' }} onClick={submitWord}>Enter</ClearEnterBtn>
      </KeyRow>
    </KeyRowsContainer>
  );
};

export default Keyboard;