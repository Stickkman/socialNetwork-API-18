const {Schema, model, Types} = require('mongoose');
const moment = require('moment'); // import moment for date/timestamps 

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId() 
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now, // default to current timestamp, used moment for formatting-v
            get: createdAtVal => moment(createdAtVal).format('ddd MMM DD, YYYY [at] hh:mm A')
        }
    },
    { toJSON: { getters: true}, id: false } // include virtual props/exlcude id in serialized JSON 
);                                          

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now, 
            get: createdAtVal => moment(createdAtVal).format('ddd MMM DD, YYYY [at] hh:mm A')
        },
        username: { // user who created thought
            type: String,
            required: true
        },
        reactions: [reactionSchema] // array of nested docs (replies) created w reactionSchema
    },
    { toJSON: { getters: true, virtuals: true}, id: false } // excluding id to avoid dups from auto ids
);

thoughtSchema.virtual('reactionCount').get(function() { // virtual that retrieves length of reactions array
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;