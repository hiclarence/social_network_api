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

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
