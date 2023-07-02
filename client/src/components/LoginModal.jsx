import React, { useState } from 'react';
import styled from 'styled-components';
import UserLogin from './UserLogin';

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

  @media (max-width: 768px) {
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
  }
`;

const InfoContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 2px solid black;
  height: auto;
  width: 55vw;
  max-height: 25vw;
  overflow-y: auto;

  @media (max-width: 768px) {
    background-color: white;
    border-radius: 20px;
    border: 2px solid black;
    height: auto;
    width: 40vw;
    max-height: 25vw;
    overflow-y: auto;
  }
`;

const Buttons = styled.button`
  height: 2em;
  width: auto;
  margin: 1em;

  @media (max-width: 768px) {
    height: 2em;
    width: auto;
    margin: 1em;
  }
`;

const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const LoginModal = ({ loggedIn, userId, userData, setShowLoginModal, switchModals, setWinCount, setLoseCount, setUsername, setLoggedIn, setUserId }) => {
  const [userList, setUserList] = useState(userData);
  const [showDataStorage, setShowDataStorage] = useState(userList.slice(0, 4));

  const updateList = (e) => {
    if (e.target.textContent === 'Load More Users') {
      const currentGroup = showDataStorage.length;
      const nextGroup = currentGroup + 4;
      setShowDataStorage((prevGroup) => {
        return prevGroup.concat(userList.slice(currentGroup, nextGroup));
      })
    } else if (e.target.textContent === 'Collapse List') {
      setShowDataStorage(userList.slice(0, 4));
    }
  };

  return (
    <ModalOverlay>
      <InfoContainer>
        {showDataStorage.map((user) => (
          <UserLogin user={user} key={user._id} setShowLoginModal={setShowLoginModal} setWinCount={setWinCount} setLoseCount={setLoseCount} setUsername={setUsername} setLoggedIn={setLoggedIn} setUserId={setUserId} userId={userId} loggedIn={loggedIn} />
        ))}
        <BtnsContainer>
          <Buttons onClick={switchModals}>Create an Account</Buttons>
          <Buttons onClick={() => setShowLoginModal(false)}>Close</Buttons>
          {showDataStorage.length !== userData.length ? <Buttons onClick={updateList}>Load More Users</Buttons> : <Buttons onClick={updateList}>Collapse List</Buttons>}
        </BtnsContainer>
      </InfoContainer>
    </ModalOverlay>
  );
};

export default LoginModal;