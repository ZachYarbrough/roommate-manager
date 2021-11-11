const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    roommates: [User]
  }

  type Query {
    users: [User]
    user(email: String!): User
  }
`;

module.exports = typeDefs;