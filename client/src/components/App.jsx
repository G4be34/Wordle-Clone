import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameInfo from './GameInfo';
import Keyboard from './Keyboard';
import WordBox from './WordBox';
import InfoModal from './InfoModal';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 35rem;
  margin: auto;
`;

const InstructionsBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

export default function App() {
  const [goalWord, setGoalWord] = useState('');
  const [letterCorrectness, setLetterCorrectness] = useState([]);
  const [rowNumber, setRowNumber] = useState(0);
  const [winLossCount, setWinLossCount] = useState('');
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);
  const [row3, setRow3] = useState([]);
  const [row4, setRow4] = useState([]);
  const [row5, setRow5] = useState([]);
  const [row6, setRow6] = useState([]);

  const deleteLetter = () => {
    if (rowNumber === 0) {
      setRow1((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    } else if (rowNumber === 1) {
      setRow2((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    } else if (rowNumber === 2) {
      setRow3((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    } else if (rowNumber === 3) {
      setRow4((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    } else if (rowNumber === 4) {
      setRow5((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    } else if (rowNumber === 5) {
      setRow6((prevRow) => {
        const updatedRow = prevRow.slice(0, -1);
        return updatedRow;
      });
    }
  };

  const compareWords = (userWord) => {
    let newArray = [];

    for (let x = 0; x < userWord.length; x++) {
      if (userWord[x] === goalWord[x]) {
        newArray[x] = 'correct';
      } else if (userWord[x] !== goalWord[x] && goalWord.includes(userWord[x])) {
        newArray[x] = 'close';
      } else {
        newArray[x] = 'wrong';
      }
    }

    setLetterCorrectness(newArray);
  };

  const createNewGoalWord = async () => {
    try {
      const randomIndex = Math.floor(Math.random() * 100);
      const newWords = await axios.get('/newgoal');
      const newWord = newWords.data[randomIndex].word.toUpperCase();
      setGoalWord(newWord);
      setLetterCorrectness([]);
      setRowNumber(0);
      setRow1([]);
      setRow2([]);
      setRow3([]);
      setRow4([]);
      setRow5([]);
      setRow6([]);
    } catch (error) {
      console.log('Error getting new goal word: ', error);
    }
  };

  const submitWord = () => {
    if (rowNumber < 6) {
      let word;

      if (rowNumber === 0) {
        word = row1.join('');
      } else if (rowNumber === 1) {
        word = row2.join('');
      } else if (rowNumber === 2) {
        word = row3.join('');
      } else if (rowNumber === 3) {
        word = row4.join('');
      } else if (rowNumber === 4) {
        word = row5.join('');
      } else if (rowNumber === 5) {
        word = row6.join('');
      }

      axios.get('/word', {
        params: { word }
      })
        .then((result) => {
          if (result.data.isWord === true) {
            compareWords(word);
            setRowNumber((prevRowNum) => {
              return prevRowNum += 1;
            });
          } else {
            alert('Please enter a valid word');
          }
        })
        .catch((error) => {
          console.log('Error sending word request to server: ', error);
        });
    }
  };

  useEffect(() => {
    createNewGoalWord();
  }, []);

  return (
    <GameContainer>
      {showInfoModal && <InfoModal setShowInfoModal={setShowInfoModal} />}
      <GameInfo winLossCount={winLossCount} />
      <WordBox row1={row1} row2={row2} row3={row3} row4={row4} row5={row5} row6={row6} setWinLossCount={setWinLossCount}
      letterCorrectness={letterCorrectness} rowNumber={rowNumber} setGoalWord={setGoalWord} createNewGoalWord={createNewGoalWord} />
      <Keyboard
      setRow1={setRow1} setRow2={setRow2} setRow3={setRow3} setRow4={setRow4} setRow5={setRow5} setRow6={setRow6}
      rowNumber={rowNumber} submitWord={submitWord} deleteLetter={deleteLetter} />
      <InstructionsBtn>
        <button style={{ padding: '.5em' }} onClick={() => setShowInfoModal(true)}>Instructions</button>
      </InstructionsBtn>
    </GameContainer>
  );
}