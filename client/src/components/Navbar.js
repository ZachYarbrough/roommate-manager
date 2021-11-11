import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>DoorSock</h1>
                </Link>

                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;