import React from 'react';
import styled from 'styled-components';

const LetterBox = styled.div`
  border: 2px solid black;
  font-size: 20px;
  margin: 10px;
  padding: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LetterRow = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WordBox = () => {

  return (
    <div>
      <ul style={{ margin: 0, padding: 0 }}>
        <LetterRow>
          <LetterBox>T</LetterBox>
          <LetterBox>E</LetterBox>
          <LetterBox>S</LetterBox>
          <LetterBox>T</LetterBox>
          <LetterBox>S</LetterBox>
        </LetterRow>
        <LetterRow>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
        </LetterRow>
        <LetterRow>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
        </LetterRow>
        <LetterRow>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
        </LetterRow>
        <LetterRow>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
        </LetterRow>
        <LetterRow>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
          <LetterBox></LetterBox>
        </LetterRow>
      </ul>
    </div>
  );
};

export default WordBox;