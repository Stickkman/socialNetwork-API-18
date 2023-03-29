// User Routes

const router = require('express').Router();

const { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteFriend,
    addFriend
} = require('../../controllers/userController');

router // route for api/users '/' 
    .route('/') 
    .get(getAllUsers) 
    .post(createUser);

router // route for 'api/users/:userId'
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router // route for 'api/users/:userId/friends/:friendId'
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;

