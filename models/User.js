const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const friendSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  
  // TODO: match valid email address
  email: { type: String, unique: true, required: true },

  //TODO: how to reference the thoughtSchema?
  thoughts: thoughtSchema,
  friends: [friendSchema]
});

//TODO: Create a virtual called friendCount

const User = mongoose.model('User', userSchema);

module.exports = User;