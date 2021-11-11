import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUsers {
    users {
      _id
      firstName,
      lastName,
      email
      roommates {
          _id
          firstName
          lastName
      }
    }
  }
`;

export default GET_USERS;