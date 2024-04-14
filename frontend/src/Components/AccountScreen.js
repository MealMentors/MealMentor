import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";

const AccountScreen = () => {
  // Fetching user profile information from local storage or initializing it as an empty object
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem("users")) || {};

  // State to hold the user's name
  const [userName, setUserName] = useState(userProfile.name || "");

  // State to hold the user's email
  const [userEmail, setUserEmail] = useState(userProfile.email || "");

  useEffect(() => {
    // Update the user's name when it changes in the location state
    if (location.state && location.state.name) {
      setUserName(location.state.name);
      // Update the local storage with the new user profile information
      localStorage.setItem("users", JSON.stringify({ ...userProfile, name: location.state.name }));
    }

    // Update the user's email when it changes in the location state
    if (location.state && location.state.email) {
      setUserEmail(location.state.email);
      // Update the local storage with the new user profile information
      localStorage.setItem("users", JSON.stringify({ ...userProfile, email: location.state.email }));
    }
    console.log("userProfile:", userProfile);
    console.log("location.state:", location.state);
    console.log("userEmail:", userEmail); 
}, [location.state, userProfile]);

  return (
    <div>
      <Link to="/home">
        <button id="returnhome-button">Home</button>
      </Link>
      <h1>My Account</h1>
      <div className="account-container">
        <div className="account-box">
          <span className="placeholder-text">Username: {userName}</span>
        </div>
        <div className="account-box">
          <span className="placeholder-text">Email: {userEmail}</span>
        </div>
        {/* Add more boxes with placeholder text as needed */}
      </div>
    </div>
  );
};

export default AccountScreen;
