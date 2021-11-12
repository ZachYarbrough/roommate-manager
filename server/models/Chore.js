const { model, Schema } = require('mongoose');

const choreSchema = new Schema(
    {
        chore: {
            type: String,
            required: 'Chore is required',
        },
        roommates: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// virtual of the amount of roommates
choreSchema.virtual('roommateCount').get(function () {
    return this.roommates.length;
});

const Chore = model('Chore', choreSchema);

module.exports = Chore;