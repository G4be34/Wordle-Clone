import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoginModal from './LoginModal';
import CreateAccountModal from './CreateAccount';

const GameInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: -1em;
`;

const ScoreBox = styled.div`
  border: 2px solid black;
  padding: 5px 20px 5px 5px;
`;

const LoginBox = styled.button`
  border: 2px solid black;
  background-color: white;
  padding: .5em;
  &:hover {
    background-color: #eaeaea;
  }
  &:active {
    transform: translateY(2px);
    transition: transform 0.2s;
  }
`;

const GameInfo = ({ winLossCount }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [userData, setUserData] = useState([]);

  const userLogIn = async () => {
    try {
      const results = await axios.get('/users');
      console.log('User results: ', results.data);
      setUserData(results.data);
      setShowLoginModal(true);
    } catch (error) {
      console.log('Error getting user info: ', error);
    }
  };

  const switchModals = () => {
    setShowLoginModal(false);
    setShowCreateModal(true);
  };

  const updateScore = (id) => {
    if (loggedIn) {
      if (winLossCount) {
        axios.put('/users/win', { id })
          .then(() => {
            setWinCount((prevCount) => {
              return prevCount += 1;
            });
          })
          .catch((error) => {
            console.log('Error updating win count: ', error);
          });
      } else if (winLossCount === false) {
        axios.put('/users/lose', { id })
          .then(() => {
            setLoseCount((prevCount) => {
              return prevCount += 1;
            });
          })
          .catch((error) => {
            console.log('Error updating lose count: ', error);
          });
      }
    } else if (!loggedIn) {
      if (winLossCount) {
        setWinCount((prevCount) => {
          return prevCount += 1;
        });
      } else if (winLossCount === false) {
        setLoseCount((prevCount) => {
          return prevCount += 1;
        });
      }
    }
  };

  useEffect(() => {
    updateScore(userId);
  }, [winLossCount]);

  return (
    <GameInfoContainer>
      {showCreateModal && <CreateAccountModal setUsername={setUsername} setWinCount={setWinCount} setUserId={setUserId} setLoggedIn={setLoggedIn}
        setLoseCount={setLoseCount} setShowCreateModal={setShowCreateModal} setShowLoginModal={setShowLoginModal} />}
      {showLoginModal && <LoginModal userData={userData} setShowLoginModal={setShowLoginModal} switchModals={switchModals} setUserId={setUserId}
        setUsername={setUsername} setLoseCount={setLoseCount} setWinCount={setWinCount} setLoggedIn={setLoggedIn} />}
      <ScoreBox>
        <div>Wins: {winCount}</div>
        <div>Losses: {loseCount}</div>
      </ScoreBox>
      <h1>Wordle Clone</h1>
      {loggedIn
        ? <LoginBox onClick={userLogIn}>{username}</LoginBox>
        : <LoginBox onClick={userLogIn}>
            <span>Log In</span>
            <hr />
            <span>Create an account</span>
          </LoginBox>}
    </GameInfoContainer>
  );
};

export default GameInfo;