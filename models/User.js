const {Schema, model} = require('mongoose'); // destructure 'Schema' and 'model' objects from required mongoose package
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
        thoughts: }
)