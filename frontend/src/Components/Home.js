import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
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

    async function logout(e) {
        e.preventDefault();
    
        try {
            // Perform any necessary cleanup, such as clearing user data from local storage
            localStorage.removeItem("users");
    
            // Redirect the user back to the home page
            window.location.href = "/login"; // Redirect to the home page
        } catch (error) {
            // If there's an error during logout, show an error notification
            showErrorNotification("Something went wrong. Please try again.");
            console.error(error);
        }
    }

    function showErrorNotification(message) {
        const notificationElement = document.createElement("div");
        notificationElement.classList.add("error-notification");
        notificationElement.textContent = message;
        document.body.appendChild(notificationElement);
        setTimeout(() => {
            document.body.removeChild(notificationElement);
        }, 5000);
    }

    return (
        <div className="homepage">
            <Link to="/"><div className="title"><div class="navlink">MealMentor</div></div></Link>
            <div className="logout-button">
                <Link to="/login">
                    <button id="logout-button" onClick={logout}>Logout</button>
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
                <div className="account-button">
                    <Link to="/home/accountscreen">
                        <button id="account-button">Account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
