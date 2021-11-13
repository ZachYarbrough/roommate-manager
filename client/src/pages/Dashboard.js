import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../utils/queries';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const { loading, error, data } = useQuery(CURRENT_USER);
    const user = data?.currentUser.user || [];
    const room = data?.currentUser.room || [];
    const roommates = data?.currentUser.roommates || [];

    if (loading) return 'Loading...'
    if (error) return `Error: ${error.message}`;

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
                {roommates.map(roommate => {
                    if (roommate._id !== user._id) {
                        return (<li key={roommate._id}>{roommate.firstName} {roommate.lastName}</li>);
                    }
                })}
            </ul>
        </main>
    );
};

export default Dashboard;
