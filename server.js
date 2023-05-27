const express = require('express');
const db = require('./config/connection');

const { User, Thought } = require('./models');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all users 
app.get('/api/users', (req, res) => {
    // Using model in route to find all documents that are instances of that model
    User.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    });
  });

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  