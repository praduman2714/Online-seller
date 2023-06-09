const mongoose = require('mongoose');

const buisnessShema = new mongoose.Schema({
  uniqueId: {
    type: String,
    unique: true,
    default: () => Math.random().toString(36).slice(2) // Generate a unique ID using a random string
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Buisness = mongoose.model('User', buisnessShema);
module.exports = Buisness;
