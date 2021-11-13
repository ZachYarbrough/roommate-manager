import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

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

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });
    };

    return (
        <main className='flex flex-col justify-center items-center h-screen'>
            <h4 className="text-black font-bold">Login</h4>
            <form className='flex flex-col rounded shadow
                                bg-gray-600
                                p-6 w-64'
                onSubmit={handleFormSubmit}>
                <input
                    className='form-input rounded bg-gray-700 text-white'
                    placeholder='Your email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className='form-input mt-2 rounded bg-gray-700 text-white'
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button className='px-4 py-2 mt-2 text-white bg-gray-700 hover:bg-gray-800 rounded shadow' type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Login failed</div>}
        </main>
    );
};

export default Login;
