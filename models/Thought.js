const mongoose = require('mongoose');


const reactionSchema = new mongoose.Schema({
    
    reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    },
    reactionBody:{ 
    type: String,
    required: true, 
    maxLength: 280 
    },
    username: { 
    type: String, 
    required: true 
    },
    createdAt: { 
    type: Date, 
    default: Date.now 
    }
    },
    {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    }
);


const thoughtSchema = new mongoose.Schema(
    {
  thoughtText: { 
    type: String, 
    required: true, 
    minLength: 1, 
    maxLength: 280
    },
    createdAt: { 
    type: Date, 
    default: Date.now
    },
    username: { 
    type: String, 
    required: true
    },
    reactions: [reactionSchema]
    },
    {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;