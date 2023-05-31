const { Schema, model, mongoose } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true, 
    trim: true
    },
  
  email: { 
    type: String, 
    unique: true, 
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
  ],
  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: this,
      },
  ]
});

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
const User = model('User', userSchema);

module.exports = User;