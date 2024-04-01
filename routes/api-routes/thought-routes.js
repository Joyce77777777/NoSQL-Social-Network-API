// thought-route.js
// Routes for handling Thought operations in the social network API
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// Routes for retrieving all thoughts and creating a new thought
// GET: Fetches all thoughts available in the database
// POST: Creates a new thought based on request body data
router.route('/')
  .get(getAllThoughts)  // Fetch and return all thoughts
  .post(createThought); // Create a new thought

// Routes for specific thought operations: fetch, update, and delete
// GET: Fetches a single thought by its ID
// PUT: Updates a thought identified by its ID with provided data
// DELETE: Removes a thought identified by its ID from the database
router.route('/:thoughtId')
  .get(getThoughtById)    // Fetch a single thought by ID
  .put(updateThoughtById) // Update a thought by ID
  .delete(deleteThought); // Delete a thought by ID

// Route for adding a reaction to a thought
// POST: Adds a reaction to the specified thought based on request body data
router.route('/:thoughtId/reactions')
  .post(createReaction); // Create a reaction for a specified thought

// Route for removing a reaction from a thought
// DELETE: Identifies a thought and a reaction within it to remove
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction); // Delete a reaction from a thought

module.exports = router;
