import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { loading, error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <form onSubmit={handleFormSubmit}>
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
                <button className='' type='submit'>
                    Submit
                </button>
            </form>
        </main>
    );
};

export default Login;
