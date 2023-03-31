// User Controller

const { User, Thought} = require('../models');

const userController = {

// GET ALL USERS
    getAllUsers(req, res) {
        User.find({})
        .populate({path: 'thoughts', select: '-__v'}) // include thoughts, exculde -__v
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// GET SINGLE USER BY ID
    getUserById({params}, res) {
        User.findOne({_id: params.userId})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .then(dbUserData => { 
            if (!dbUserData) {res.status(404).json({message: '! User Id Not Found !'}); return;
            }
            res.json(dbUserData);
        })
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// CREATE A NEW USER
    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// UPDATE USER BY ID
    updateUser({params, body}, res) {
        User.findOneAndUpdate({_id: params.userId},
        {$set: body }, {new: true, runValidators: true}) // set used to only update body field
        .then(dbUserData => { 
            if (!dbUserData) {res.status(404).json({message: '! User Id Not Found !'}); return;
            }
            res.json(dbUserData);
        })
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// DELETE USER BY ID
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.userId})
        .then(dbUserData => { 
            if (!dbUserData) {res.status(404).json({message: '! User Id Not Found !'}); return;
            }
            return Thought.deleteMany({_id: {$in: dbUserData.thoughts}});
        })
        .then(() => { res.json({message: '! User and connected thoughts have been deleted !'});
        })
        .catch(e => {console.log(e); res.status(400).json(e);
        });
    },

// ADD FRIEND

    addFriend({params}, res) {
        User.findOneAndUpdate({_id: params.userId},
            {$push: {friends: params.friendId}},
            {new: true, runValidators: true})
            .then(dbUserData => { 
                if (!dbUserData) {res.status(404).json({message: '! User Id Not Found !'}); return;
                }
                res.json(dbUserData);
            })
            .catch(e => {console.log(e); res.status(400).json(e);
            });
        },
        
// DELETE FRIEND
        deleteFriend({params}, res) {
            User.findOneAndUpdate({_id: params.userId},
                {$pull: {friends: params.friendId}},
                {new: true})
                .then(dbUserData => { 
                    if (!dbUserData) {res.status(404).json({message: '! User/Friend Id Not Found !'}); return;
                    }
                    res.json(dbUserData);
                })
                .catch(e => {console.log(e); res.status(400).json(e);
                });
            }
        };
  
        module.exports = userController;
        
