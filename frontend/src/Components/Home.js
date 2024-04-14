import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Home.css";

function Home() {
    const location = useLocation();
    // Fetching user profile information from local storage or initializing it as an empty object
    const userProfile = JSON.parse(localStorage.getItem("users")) || {};

    // State to hold the user's name
    const [userName, setUserName] = useState(userProfile.name || "");
    useEffect(() => {
        // Update the user's name when it changes in the location state
        if (location.state && location.state.name) {
            setUserName(location.state.name);
            // Update the local storage with the new user profile information
            localStorage.setItem("users", JSON.stringify({ ...userProfile, name: location.state.name}));
        }
    }, [location.state]);

    return (
        
        <div className="homepage">
            <div className="logout-button">
                <Link to="/login">
                    <button id="logout-button">Logout</button>
                </Link>
            </div>
            <h1>Hello {userName && ` ${userName}`}, and welcome to the homepage!</h1>
            <div className="button-func-div">
                <Link to="/home/catalog">
                    <button id="home-button">Catalog</button>
                </Link>
                <Link to="/home/schedule">
                    <button id="home-button">Scheduling</button>
                </Link>
                <Link to="/home/recommend">
                    <button id="home-button">Recommend me a meal</button>
                </Link>
                <Link to="/home/log">
                    <button id="home-button">Logging</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
