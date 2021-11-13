const { model, Schema } = require('mongoose');

const roomSchema = new Schema(
    {
        roomName: {
            type: String,
            required: 'Room name is required.',
            trim: true
        },
        roommates: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        chores: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Chore'
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
roomSchema.virtual('roommateCount').get(function () {
    return this.roommates.length;
});

// virtual of the amount of chores
roomSchema.virtual('choreCount').get(function () {
    return this.chores.length;
});

const Room = model('Room', roomSchema);

module.exports = Room;