const router = require('express').Router();
const {
  getThoughts, //done
  getSingleThought, //done
  createThought, //done
  editThought, //done
  deleteThought, //done
  addReaction, //testing
  removeReaction //testing
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// TODO: don't forget to push the created thought's _id to the associated user's thoughts array field)
// /api/thoughts/:thoughtID
router.route('/:thoughtId').get(getSingleThought).put(editThought).delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;