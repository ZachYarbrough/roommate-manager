const { User, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // the current user that is logged
    currentUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // searches for all users
    users: async () => {
      return User.find();
    },
    //searches for a single user based on email
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    rooms: async () => {
      return Room.find();
    },
    room: async (parent, { roomId }) => {
      return Room.findOne({ roomId });
    },
  },
  Mutation: {
    // logs a user in if email and password are valid
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    // adds a new user to the database
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //adds a new room to the database
    addRoom: async (parent, { roomName, userId }, context) => {
      if (context.user) {
        const room = await Room.create({ roomName });
        await Room.findOneAndUpdate(
          { _id: room._id },
          { $addToSet: { roommates: { _id: userId } } },
          { new: true }
        )
        await User.findOneAndUpdate(
          { _id: userId },
          { room: { _id: room._id } },
          { new: true }
        )

        return room;
      }

      throw new AuthenticationError('You need to be logged in!'); ƒ
    }
  }
};

module.exports = resolvers;
