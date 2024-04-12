import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Welcome.css';

const Welcome = () => {
    return (
        <div>
            <navbar className="column_align">
                <ul className="login_signup">
                    <label className="title">MealMentor</label>
                    <li className="login_button" style={{marginLeft: 'auto', marginRight: '0px'}}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="login_button" style={{marginLeft: '5px'}}>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </navbar>
            <h1>Welcome to MealMentor!</h1>
            {/* Add your content here */}
        </div>
    );
};

export default Welcome;