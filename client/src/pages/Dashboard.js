import React from 'react';
import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../utils/queries';

const Dashboard = () => {
    const { loading, error, data } = useQuery(CURRENT_USER);
    const currentUser = data?.currentUser || [];

    if (!currentUser?.email) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <main className='no-drag'>
            <h2>
                Good Morning, {currentUser.firstName}
            </h2>
        </main>
    );
};

export default Dashboard;
