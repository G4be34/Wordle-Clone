import React, { useState } from 'react';
import styled from 'styled-components';

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 2em;
  border: 2px solid black;
  margin: 1em;
  padding-left: 1em;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 2em;
    border: 2px solid black;
    margin: 1em;
    padding-left: 1em;
  }
`;

const ScoreInfo = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-right: 1em;

  @media (max-width: 768px) {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-right: 1em;
  }
`;

const UserPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

const UserLogin = ({ user, setUsername, setWinCount, setLoseCount, setShowLoginModal, setLoggedIn, setUserId }) => {
  const [passwordInput, setPasswordInput] = useState('');

  const userLogin = (password) => {
    if (parseInt(password) === user.number) {
      setPasswordInput('');
      setUsername(user.username);
      setUserId(user._id);
      setWinCount(user.wins);
      setLoseCount(user.losses);
      setLoggedIn(true);
      setShowLoginModal(false);
    } else {
      setPasswordInput('');
      alert('Wrong number password, please try again')
    }
  }

  return (
    <UserInfo key={user._id}>
      <UserPasswordContainer>
        <div>{user.username}</div>
        <input type="text" placeholder="Type Number Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
        <button onClick={() => userLogin(passwordInput)}>Enter</button>
      </UserPasswordContainer>
      <ScoreInfo>
        <div>Wins: {user.wins}</div>
        <div>Losses: {user.losses}</div>
      </ScoreInfo>
    </UserInfo>
  );
};

export default UserLogin;