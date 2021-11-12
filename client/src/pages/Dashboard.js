import React from 'react';
import { useQuery } from '@apollo/client';
import GET_USERS from '../utils/queries';


const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    const users = data?.users || [];

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <main className='no-drag'>
            {users.map(user => {
                return (
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                );
            })}
        </main>
    );
};

export default Dashboard;
