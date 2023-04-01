// Thought Controller

const { User, Thought} = require('../models');

const thoughtController = {

// GET ALL THOUGHTS
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
        },

// GET THOUGHT BY ID
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.thoughtId})
        .select('-__v')
   
        
        .then(dbUserData => { 
            if (!dbUserData) {res.status(404).json({message: '! Thought Id Not Found !'}); return;
            }
            res.json(dbUserData);
        })
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// CREATE A NEW THOUGHT
        createThought(req, res) {  console.log(req.userId + 'WFT1 '); console.log(req.body.username + 'WFT2 '); 
            Thought.create(req.body) 
            .then(dbThoughtData => {return User.findOneAndUpdate(
                {username: req.body.username},
              
                {$push: {thoughts: dbThoughtData._id}}, // push created thoughts id to thoughts array
                {new: true});
            }) 
            .then(dbThoughtData => {
                if (!dbThoughtData) {res.status(404).json({message: '! User Id Not Found !'}); return;
                }
                res.json(dbThoughtData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            }); 
        },

// UPDATE THOUGHT BY ID
        updateThought({params, body}, res) {
            Thought.findOneAndUpdate({_id: params.thoughtId},
            {$set: body}, {new: true, runValidators: true})
            .then(dbThoughtData => { 
                if (!dbThoughtData) {res.status(404).json({message: '! Thought Id Not Found !'}); return;
                }
                res.json(dbThoughtData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        },

// DELETE THOUGHT BY ID
    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then(dbDeleteThoughtData => {
            if (!dbDeleteThoughtData) {res.status(404).json({message: '! Thought Id Not Found !'}); return;
            }
            res.json({message: '! Thought has been deleted !'});
            return;
            })   
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        },

// ADD REACTION --> THOUGHT
    addReaction({params, body}, res) {
        Thought.findOneAndUpdate({_id:params.ThoughtId},
            {$push: {reactions:body}},
            {new: true, runValidators: true})
            .then(dbThoughtData => { 
                if (!dbThoughtData) {res.status(404).json({message: '! Thought Id Not Found !'}); return;
                }
                res.json(dbThoughtData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        },

// DELETE REACTION
    deleteReaction({params}, res) {
        Thought.findOneAndUpdate({_id: params.ThoughtId},
            {$pull: {reactions: {reactionId: params.reactionId}}},
            {new: true})
            .then(dbThoughtData => { 
                if (!dbThoughtData) {res.status(404).json({message: '! Reaction Id Not Found !'}); return;
                }
                res.json(dbThoughtData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        }
};


module.exports= thoughtController;

      