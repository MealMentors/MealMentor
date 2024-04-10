import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Welcome.css';

const Welcome = () => {
    return (
        <div>
            <navbar>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </navbar>
            <h1>Welcome to MealMentor!</h1>
            {/* Add your content here */}
        </div>
    );
};

export default Welcome;