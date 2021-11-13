import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../utils/queries';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const { loading: loading_user, data: data_user } = useQuery(CURRENT_USER)
    if(loading_user) return null


    if (!data_user.currentUser.room) {
        return (
            <Redirect to='/createRoom' />
        );
    }

    return (
        <main className='no-drag'>
            <h2>
                Good Morning, {data_user.currentUser.firstName}
            </h2>
            <div>
                <h2>
                    {data_user.currentUser.firstName} {data_user.currentUser.lastName}
                </h2>
                <p>{data_user.currentUser.room._id}</p>
            </div>
        </main>
    );
};

export default Dashboard;
