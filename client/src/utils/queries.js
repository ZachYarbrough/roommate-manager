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
        user {
          _id
          firstName
          lastName
          email
          room {
            _id
          }
        }
        room {
          _id
          roomName
          roommates {
            _id
          }
        }
        roommates {
            _id
            firstName
            lastName
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