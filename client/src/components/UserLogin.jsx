import React, { useState } from 'react';
import axios from 'axios';
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

const UserLogin = ({ loggedIn, userId, user, setUsername, setWinCount, setLoseCount, setShowLoginModal, setLoggedIn, setUserId }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);
  const [confirmDeletion, setConfirmDeletion] = useState(false);

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
      setWrongPassword(true);
    }
  }

  const deleteAccount = (password) => {
    if (parseInt(password) === user.number) {
      setAreYouSure(true);
    } else {
      setPasswordInput("");
      setWrongPassword(true);
    }
  }

  const confirm = async (id) => {
    try {
      console.log('ID: ', id)
      await axios.delete(`/users`, { data: { id }});
      if (loggedIn && id === userId) {
        setPasswordInput("");
        setAreYouSure(false);
        setWinCount(0);
        setLoseCount(0);
        setLoggedIn(false);
        setShowLoginModal(false);
      } else {
        setPasswordInput('');
        setAreYouSure(false);
        setShowLoginModal(false);
      }
    } catch (error) {
      console.log('Error deleting user: ', error.response);
    }
  }

  return (
    <UserInfo key={user._id}>
      <UserPasswordContainer>
        <div>{user.username}</div>
        <input type="password" placeholder="Type Number Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
        <button onClick={() => userLogin(passwordInput)}>Enter</button>
        <button onClick={() => deleteAccount(passwordInput)}>Delete Account</button>
        {wrongPassword && <div style={{ color: 'red' }}>Wrong number password</div>}
        {areYouSure && (
          <div style={{ color: 'red' }}>
            Are you sure?
            <button onClick={() => confirm(user._id)} style={{ marginLeft: '1em'}}>Yes</button>
            <button onClick={() => setAreYouSure(false)} style={{ marginLeft: '1em'}}>No</button>
          </div>)}
      </UserPasswordContainer>
      <ScoreInfo>
        <div>Wins: {user.wins}</div>
        <div>Losses: {user.losses}</div>
      </ScoreInfo>
    </UserInfo>
  );
};

export default UserLogin;