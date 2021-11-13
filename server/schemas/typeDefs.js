const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Room {
    _id: ID
    roomName: String
    roommates: [User]
    chores: [Chore]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    room: Room
  }

  type Chore {
    _id: ID
    chore: String
    roommates: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type CurrentUser {
    user: User
    room: Room
  }

  type Query {
    currentUser: CurrentUser
    users: [User]
    user(email: String!): User
    rooms: [Room]
    room(roomId: ID!): Room
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRoom(roomName: String!, userId: ID!): Room
    addRoommate(roommateId: ID!): Auth
  }
`;

module.exports = typeDefs;