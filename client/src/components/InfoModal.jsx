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

const InfoContainer = styled.div`
  background-color: white;
  width: 40vw;
  height: auto;
  padding: 1em;
  border-radius: 20px;
  border: 2px solid black;
`;

const Button = styled.button`
  padding: 1em;
  margin: .5em;
  border-radius: 15px;
`;

const InfoSection = styled.div`
  padding: 1.5em;
`;

const ExampleDesc = styled.div`
  margin: 1em;
  gap: 1em;
`;

const InfoModal = ({ setShowInfoModal }) => {
  return (
    <ModalOverlay>
      <InfoContainer>
        <h2 style={{ marginLeft: '1em' }}>How to Play</h2>
        <div>
          <InfoSection>
            <div>Each guess must be a valid 5-letter word.</div>
            <div>The color of the tiles will change to show how close your guess was to the word.</div>
          </InfoSection>
          <h3 style={{ marginLeft: '1em' }}>Color Meanings:</h3>
          <ExampleDesc><strong style={{ color: 'green' }}>Green: </strong>The letter is in the word and in the correct position</ExampleDesc>
          <ExampleDesc><strong style={{ color: '#cccc00' }}>Yellow: </strong>The letter is in the word but not in the correct position</ExampleDesc>
          <ExampleDesc><strong style={{ color: 'red' }}>Red: </strong>The letter is not in the word</ExampleDesc>
        </div>
        <Button onClick={() => setShowInfoModal(false)}>Got it!</Button>
      </InfoContainer>
    </ModalOverlay>
  );
};

export default InfoModal;