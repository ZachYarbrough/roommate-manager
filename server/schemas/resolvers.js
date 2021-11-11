const { User } = require('../models');

const resolvers = {
  Query: {
    // searches for all users
    users: async () => {
      return User.find();
    },
    //searches for a single user based on email
    user: async (parent, { email }) => {
      return User.findOne({ email });
    }
  }
};

module.exports = resolvers;
