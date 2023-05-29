const router = require('express').Router();

const {
  getUsers,
  getSingleUser, 
  createUser, 
  editUser, 
  deleteUser, 
  addFriend, 
  removeFriend 
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(editUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/').post(addFriend)

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
