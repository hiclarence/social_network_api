const mongoose = require('mongoose');


const reactionSchema = new mongoose.Schema({
    //TODO: Reference ObjectID data type
    reactionId: {},
    reactionBody:{ type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    
    //TODO: Reference ObjectID data type
    createdAt: { type: Date }
  });


const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  
  //TODO: format to have date, set default value, use a getter method
  createdAt:  { type: Date },
  
  username: { type: String, required: true},
  reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;