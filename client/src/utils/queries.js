import { gql } from '@apollo/client';

export const GET_USERS = gql`
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

export const CURRENT_USER = gql`
    query currentUser {
      currentUser {
        _id
        firstName
        lastName
        email
        room {
          _id
        }
      }
    }
`;

export const GET_ROOM = gql`
  query getRoom($roomId: ID!) {
    room(roomId: $roomId) {
      _id
      roomName
      roommates {
        _id
      }
    }
  }
`;