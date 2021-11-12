import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [addUser, { loading, error }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

    };

    return (
        <main className='flex-row justify-center mb-4'>
            <h4 className='card-header'>Sign Up</h4>
            <form onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Your first name'
                    name='firstName'
                    type='firstName'
                    id='firstName'
                    value={formState.firstName}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='Your last name'
                    name='lastName'
                    type='lastName'
                    id='lastName'
                    value={formState.lastName}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
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
