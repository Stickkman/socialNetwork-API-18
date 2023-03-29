const {Schema, model} = require('mongoose'); // destructure 'Schema' and 'model' objects from required mongoose package
const { Thought } = require('.');
                                                // Schema for creating new schema objects to define the structure
                                                // model for creating new models, maps to mongodb collection

const userSchema = new Schema(
    {
        username: { // username required, must be a unique string, remove whitespace with trim before and after username
            type:String, 
            unique: true, 
            required: true, 
            trim: true
        }, 
        email: {
            type: String, 
            required: true, 
            unique: true, 
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'INVALID email format !!'] // regex function to ensure email is valid
        },                                                                                      // display message if invalid
        thoughts: [ // Array of ids values
        {
            type: Schema.Types.ObjectId, // ObjectId for unique identifier specific to mongo
            ref: 'Thought'               // references 'Thought' model
        }
        ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'                 // self reference
        }
        ]
    },

);

userSchema.virtual('friendCount').get(function() { // virtual that retrieves the length of friends array
    return this.friends.length;
});


module.exports = User;  