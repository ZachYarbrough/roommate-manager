import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_ROOM } from '../utils/mutations';

const Signup = () => {
    const [formState, setFormState] = useState({ roomName: '' });
    const [addRoom, { loading, error }] = useMutation(ADD_ROOM);
    const userId = Auth.getProfile().data._id

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        try {
            await addRoom({
                variables: { ...formState, userId }
            });

            window.location.assign('/');
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            roomName: ''
        });
    };

    return (
        <main className='flex-row justify-center mb-4'>
            <h4 className='card-header'>Sign Up</h4>
            <form onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Room name'
                    name='roomName'
                    type='roomName'
                    id='roomName'
                    value={formState.firstName}
                    onChange={handleChange}
                />
                <button className='btn d-block w-100' type='submit'>
                    Submit
                </button>
            </form>
        </main>
    );
};

export default Signup;