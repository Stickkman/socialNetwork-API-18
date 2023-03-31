// Thought Controller

const thoughtController = {

// GET ALL THOUGHTS
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({path: 'reactions', select: '-__v'}) // include reactions, exclude __v
        .select('__v')
        .sort({_id: -1})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// GET THOUGHT BY ID
    getThoughtById(req, res) {
        Thought.findOne({_id: params.thoughtId})
        .populate({path: 'reactions', select: '-__v'})
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
        createThought(req, res) {
            Thought.create(req.body)
            .then(({_id}) => { returnUser.findOneAndUpdate(
                {_id:body.userId},
                {$push: {thoughts: _id}}, // push created thoughts id to thoughts array
                {new: true});
            })
            .then(dbUserData => { 
                if (!dbUserData) {res.status(404).json({message: '! User Id Not Found !'}); return;
                }
                res.json(dbUserData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        },

// UPDATE THOUGHT BY ID
        updateThought({params, body}, res) {
            Thought.findOneAndUpdate({_id: params.ThoughtId},
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
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.ThoughtId})
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

      