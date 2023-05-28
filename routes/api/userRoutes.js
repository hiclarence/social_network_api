const router = require('express').Router();

const {
  getUsers, //done
  getSingleUser, //done
  createUser, //done
  editUser, //done
  deleteUser, //done
  addFriend, 
  removeFriend 
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(editUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend)

// .delete(removeFriend);

module.exports = router;
