// Thought Routes

const router = require('express').Router();

const { 
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router // route for api/thoughts '/' 
    .route('/') 
    .get(getAllThoughts) 
    .post(createThought);

router // route for 'api/thoughts/:thoughtId'
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router // route for 'api/thoughts/:thoughtId/reactions'
    .route('/:thoughtId/reactions')
    .post(addReaction);

router // route for 'api/thoughts/thoughtId/reactions/:reactionId'
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
      


module.exports = router;

