import React, { useState } from 'react';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
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
