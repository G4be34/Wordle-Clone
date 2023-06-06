const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/wordle-clone');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    uniqie: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
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