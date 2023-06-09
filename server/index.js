require('dotenv').config();
const path = require('path');
const axios = require('axios');
const { User } = require('../database/mongoschema.js');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/users', async (req, res) => {
  try{
    if (req.query.username !== undefined) {
      const { username } = req.query;
      const singleUser = await User.findOne({ username });
      res.status(200).send(singleUser);
    } else {
      const allUsers = await User.find({});
      res.status(200).send(allUsers);
    }
  } catch(error) {
    console.log('Error getting user data: ', error);
    res.sendStatus(500);
  }
});

app.post('/users', async (req, res) => {
  try{
    const user = new User({
      username: req.body.username,
      number: req.body.number,
      wins: 0,
      losses: 0,
    });

    await user.save();

    res.sendStatus(201);
  } catch(error) {
    console.log('Error getting user data: ', error);
    res.sendStatus(500);
  }
});

app.get('/word', async (req, res) => {
  try{
    const { word } = req.query;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const response = await axios.get(url);
    if (response.data[0].word !== undefined) {
      res.status(200).send({ isWord: true });
    } else {
      res.status(200).send({ isWord: false });
    }
  } catch(error) {
    console.log('Error getting user data: ', error.response.data);
    if (error.response.data.title === 'No Definitions Found') {
      res.status(200).send({ isWord: false });
    } else {
      res.sendStatus(500);
    }
  }
});

app.get('/newgoal', async (req, res) => {
  try {
    const newWords = await axios.get('https://api.datamuse.com/words?sp=?????');
    res.status(200).send(newWords.data);
  } catch (error) {
    console.log('Error obtaining new goal word: ', error.response);
    res.sendStatus(500);
  }
});

app.put('/users/win', async (req, res) => {
  try{
    const { id } = req.body;

    await User.updateOne({ _id: id }, { $inc: { wins: 1 }});

    res.sendStatus(201);
  } catch(error) {
    console.log('Error updating win score: ', error.response.data);
    res.sendStatus(500);
  }
});

app.put('/users/lose', async (req, res) => {
  try{
    const { id } = req.body;

    await User.updateOne({ _id: id }, { $inc: { losses: 1 }});

    res.sendStatus(201);
  } catch(error) {
    console.log('Error updating lose score: ', error.response.data);
    res.sendStatus(500);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
