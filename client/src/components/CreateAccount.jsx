import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AccountContainer = styled.div`
  width: 30vw;
  height: auto;
  padding: 1em;
  background-color: white;
  border-radius: 20px;
  border: 2px solid black;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1em 0 1em 0;
`;

const AccountInfoContainer = styled.div`
  margin: 1em;
`;

const CreateAccountModal = ({ setUsername, setWinCount, setUserId, setLoseCount, setShowCreateModal, setShowLoginModal, setLoggedIn }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [typedPassword, setTypedPassword] = useState(false);
  const [goodPw, setGoodPw] = useState(true);
  const [goodUser, setGoodUser] = useState(true);
  const [matchingPws, setMatchingPws] = useState(true);

  const createNewAccount = async (username, password, secondPw) => {
    try {
      const checkUsername = await axios.get('/users', {
        params: { username }
      })

      if (checkUsername.data.username === username) {
        setGoodUser(false);
        return;
      }

      const numberPw = parseInt(password);

      if (isNaN(numberPw) || numberPw < 1 || numberPw > 1000) {
        if (!goodUser) {
          setGoodUser(true);
        }
        setGoodPw(false);
        return;
      } else {
        if (!goodPw) {
          setGoodPw(true);
        }
        if (!goodUser) {
          setGoodUser(true);
        }

        if (password !== secondPw) {
          setMatchingPws(false);
          return;
        }

        await axios.post('/users', { username, number: numberPw });
        const newUser = await axios.get('/users', {
          params: {
            username
          }
        });
        setUsername(newUser.data.username);
        setWinCount(newUser.data.wins);
        setLoseCount(newUser.data.losses);
        setUserId(newUser.data._id);
        setLoggedIn(true);
        setShowCreateModal(false);
      }

    } catch (error) {
      console.log('Error creating new account: ', error);
    }
  };

  const cancelAccount = () => {
    setShowLoginModal(true);
    setShowCreateModal(false);
  };

  return (
    <ModalOverlay>
      <AccountContainer>
        <AccountInfoContainer>
          <div>Enter a Username:</div>
          <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} required />
          {goodUser === false && <div style={{ color: 'red' }}>Username already exists</div>}
        </AccountInfoContainer>
        <AccountInfoContainer>
          <div>Choose a number between 1 and 1000 as your Password</div>
          <input type="password" placeholder="Number" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          {goodPw === false && <div style={{ color: 'red' }}>Please input a number between 1 and 1000</div>}
          <div style={{ marginTop: '1em' }} >Confirm Number Password</div>
          <input type="password" placeholder="Confirm Number" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          {matchingPws === false && <div style={{ color: 'red' }}>Passwords do not match</div>}
        </AccountInfoContainer>
        <ButtonContainer>
          <button style={{ marginLeft: '1em' }} onClick={() => createNewAccount(newUsername, newPassword, confirmPassword)}>Submit</button>
          <button onClick={cancelAccount}>Cancel</button>
        </ButtonContainer>
      </AccountContainer>
    </ModalOverlay>
  );
};

export default CreateAccountModal;