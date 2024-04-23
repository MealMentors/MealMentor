import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Style/Welcome.css';

const Welcome = () => {
    const location = useLocation();
    // Fetching user profile information from local storage or initializing it as an empty object
    const userProfile = JSON.parse(localStorage.getItem("users")) || {};

    // State to hold the user's name
    const [userName, setUserName] = useState(userProfile.name || "Not Logged In");

    useEffect(() => {
        // Update the user's name when it changes in the location state
        if (location.state && location.state.name) {
            setUserName(location.state.name);
            // Update the local storage with the new user profile information
            localStorage.setItem("users", JSON.stringify({ ...userProfile, name: location.state.name }));
        }
    }, [location.state]);

    document.body.style.height = "720px"; //Manually set document height

    return (
        <div>
            <navbar className="column_align">
                <ul className="login_signup">
                    <Link to="/"><div className="title"><div class = "navlink">MealMentor</div></div></Link>
                    <li className="login_button" style={{marginLeft: 'auto', marginRight: '0px'}}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="login_button" style={{marginLeft: '5px'}}>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </navbar>
            <div className="center">
                <br></br><br></br><br></br><br></br>
                <h1>Welcome to MealMentor!</h1>
            </div>
            <div className = "center">
                <div className="heading2">MealMentor is a web-powered application designed to help you eat healthy!</div><br></br>
                <div className="underlinedheading2">MealMentor Features:</div>
            </div>
            <div className="center">
                <div className = "heading2">
                    Meal Scheduling
                </div>
            </div>
            <div className="center">
                <div className="heading2">
                    Personalized Meal Recommendations
                </div>
            </div>
            <div className="center">
                <div className="heading2">
                    A meal catalog with over 300 recipes
                </div>
            </div>
            <div className="center">
                <div className="heading2">
                    And more!
                </div>
            </div>
            <div className="center">
                <div className="heading2"><br></br>
                    Start a new account for free today!
                </div>
                <div className="copyright">Copyright &copy; 2024 by MealMentor Team. All rights reserved.</div>
            </div>
        </div>

    );
};

export default Welcome;