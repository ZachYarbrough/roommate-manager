const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    roommates: [User]
  }

  type Room {
    _id: ID,
    roommates: [User],
    chores: [Chore]
  }

  type Chore {
    _id: ID,
    chore: String,
    roommates: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    currentUser: User
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRoom(roomName: String!, roommates: [String]): Room
    addRoommate(roommateId: ID!): Auth
  }
`;

module.exports = typeDefs;