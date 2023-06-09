const mongoose = require("mongoose");
mongoose.connect('mongodb://18.221.56.13/wordle-clone');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true,
  },
  wins: {
    type: Number,
    required: true
  },
  losses: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;