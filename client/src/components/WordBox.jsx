import React, { useState, useEffect } from 'react';
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
  background-color: ${props => props.bgColor};
`;

const LetterRow = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WordBox = ({ row1, row2, row3, row4, row5, row6, letterCorrectness, rowNumber }) => {
  const [row1Color, setRow1Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row2Color, setRow2Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);

  useEffect(() => {
    if (rowNumber === 1) {
      setRow1Color(letterCorrectness.map(status => {
        if (status === 'wrong') return 'red';
        if (status === 'close') return 'yellow';
        if (status === 'correct') return 'green';
        return 'transparent';
      }));
    } else if (rowNumber === 2) {
      setRow2Color(letterCorrectness.map(status => {
        if (status === 'wrong') return 'red';
        if (status === 'close') return 'yellow';
        if (status === 'correct') return 'green';
        return 'transparent';
      }));
    }
    // Add more conditions for other rows if needed
  }, [letterCorrectness, rowNumber]);

  return (
    <div>
      <ul style={{ margin: 0, padding: 0 }}>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row1Color[index]} >{row1[index]}</LetterBox>)}
          {/* <LetterBox bgColor={unmatchedIndexes.includes(0) ? 'red' : 'transparent'}>{row1[0]}</LetterBox>*/}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row2Color[index]} >{row2[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} >{row3[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} >{row4[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} >{row5[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} >{row6[index]}</LetterBox>)}
        </LetterRow>
      </ul>
    </div>
  );
};

export default WordBox;