import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
position: fixed;
overflow: hidden;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 9999;
display: flex;
justify-content: center;
align-items: center;
`;

const MessageContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  height: 15vw;
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3em;
  margin-top: 1em;
`;

const WinModal = ({ setShowWinModal, createNewGoalWord, setWinLossCount }) => {

  const generateNewWord = () => {
    setWinLossCount(true);
    createNewGoalWord();
    setShowWinModal(false);
  };

  return (
    <ModalOverlay>
      <MessageContainer>
        <h2>Congrats! You won!</h2>
        <div>Would you like to play again?</div>
        <ButtonContainer>
          <button onClick={generateNewWord}>Yes!</button>
          <button onClick={() => setShowWinModal(false)}>No</button>
        </ButtonContainer>
      </MessageContainer>
    </ModalOverlay>
  );
}

export default WinModal;