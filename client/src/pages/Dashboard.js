import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../utils/queries';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const { loading, error, data } = useQuery(CURRENT_USER);
    const user = data?.currentUser.user || [];
    const room = data?.currentUser.room || [];

    if(loading) return 'Loading...'
    if(error) return `Error: ${error.message}`;

    if (!room._id) {
        return (
            <Redirect to='/createRoom' />
        );
    }

    return (
        <main className='no-drag'>
            <h2>
                Good Morning, {user.firstName}
            </h2>
            <div>
                <p>Room: {room.roomName}</p>
            </div>
            <h3>Roommates</h3>
            <ul>
                {room.roommates.map(roommate => {
                    return(<li>{roommate.firstName} {roommate.lastName}</li>);
                })}
            </ul>
        </main>
    );
};

export default Dashboard;
