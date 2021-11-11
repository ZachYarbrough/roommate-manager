import React from 'react';
import { useQuery } from '@apollo/client';
import GET_USERS from '../utils/queries';

const Navbar = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div name="user">
            {data.users.map(user => (
                <div key={user.id} value={user.firstName}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>{user.email}</p>
                    {user.roommates.map(roommate => {
                        return (<div key={roommate.id}>
                            {roommate.firstName}
                        </div>);
                    })}
                </div>
            ))}
        </div>
    );
}

export default Navbar;