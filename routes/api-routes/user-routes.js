// user-routes.js
// Routes for handling User operations in the social network API

const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Routes for retrieving all users and creating a new user
// GET: Fetches all users from the database
// POST: Creates a new user with provided request body data
router.route('/')
  .get(getAllUsers)  // Fetch and return all users
  .post(createUser); // Create a new user

// Routes for specific user operations: fetch by ID, update by ID, and delete by ID
// GET: Fetches a single user by their ID
// PUT: Updates user information for the user identified by ID
// DELETE: Removes the user identified by ID from the database
router.route('/:userId')
  .get(getUserById)     // Fetch a single user by ID
  .put(updateUserById)  // Update a user by ID
  .delete(deleteUserById); // Delete a user by ID

// Routes for managing a user's friends list: adding and removing friends
// POST: Adds a specified friend to the user's friend list
// DELETE: Removes a specified friend from the user's friend list
router.route('/:userId/friends/:friendId')
  .post(addFriend)    // Add a friend to the user's friends list
  .delete(removeFriend); // Remove a friend from the user's friends list

module.exports = router;
