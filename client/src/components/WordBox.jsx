import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WinModal from './WinModal';
import LoseModal from './LoseModal';

const LetterBox = styled.div`
  border: 2px solid black;
  font-size: 20px;
  margin: .55em;
  padding: 15px;
  width: 2em;
  height: 2em;
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

const WordBox = ({ row1, row2, row3, row4, row5, row6, letterCorrectness, rowNumber, createNewGoalWord, setWinLossCount }) => {
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [row1Color, setRow1Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row2Color, setRow2Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row3Color, setRow3Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row4Color, setRow4Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row5Color, setRow5Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
  const [row6Color, setRow6Color] = useState(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);

  useEffect(() => {
    let winCounter = 0;

    if (letterCorrectness.length === 0) {
      setRow1Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
      setRow2Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
      setRow3Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
      setRow4Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
      setRow5Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
      setRow6Color(['transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
    }

    if (rowNumber === 1) {
      setRow1Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    } else if (rowNumber === 2) {
      setRow2Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    } else if (rowNumber === 3) {
      setRow3Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    } else if (rowNumber === 4) {
      setRow4Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    } else if (rowNumber === 5) {
      setRow5Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    } else if (rowNumber === 6) {
      setRow6Color(letterCorrectness.map(status => {
        if (status === 'wrong') {
          return 'red';
        }
        if (status === 'close') {
          return 'yellow';
        }
        if (status === 'correct') {
          winCounter += 1;
          return 'green'
        }
        return 'transparent';
      }));
    }
    if (winCounter === 5) {
      console.log('You win!');
      setShowWinModal(true);
    }
    if (rowNumber === 6 && winCounter !== 5) {
      console.log('You Lose!');
      setShowLoseModal(true);
    }
  }, [letterCorrectness, rowNumber]);

  return (
    <div>
      {showWinModal && <WinModal setShowWinModal={setShowWinModal} createNewGoalWord={createNewGoalWord} setWinLossCount={setWinLossCount} />}
      {showLoseModal && <LoseModal setWinLossCount={setWinLossCount} setShowLoseModal={setShowLoseModal} createNewGoalWord={createNewGoalWord} />}
      <ul style={{ margin: 0, padding: 0 }}>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row1Color[index]} >{row1[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row2Color[index]} >{row2[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row3Color[index]} >{row3[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row4Color[index]} >{row4[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row5Color[index]} >{row5[index]}</LetterBox>)}
        </LetterRow>
        <LetterRow>
          {[0, 1, 2, 3, 4].map((letterbox, index) => <LetterBox key={index} bgColor={row6Color[index]} >{row6[index]}</LetterBox>)}
        </LetterRow>
      </ul>
    </div>
  );
};

export default WordBox;