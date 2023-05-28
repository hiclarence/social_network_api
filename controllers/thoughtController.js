const { Thought } = require('../models');

module.exports = {
  // get all thoughts
    getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  //edit a thought
  editThought(req, res) {
    Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbthoughtData) => res.json(dbthoughtData))
      .catch((err) => res.status(500).json(err));
  },
  //delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({ message: 'Thought deleted' })
      )
      .catch((err) => res.status(500).json(err));
  },
    // Add a reaction
addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { responses: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove reaction
  removeReaction(req, res) {
    Video.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { responseId: req.params.responseId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(video)
      )
      .catch((err) => res.status(500).json(err));
  },
};
