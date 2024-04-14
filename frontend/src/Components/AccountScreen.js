// AccountScreen.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";
import { useNavigate} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

const AccountScreen = () => {
    return (
        <div>
            <Link to="/home">
                    <button id="returnhome-button">Home</button>
                </Link>
            <h1>My Account</h1>
<div className="account-container">
      <div className="account-box">
        <span className="placeholder-text">Username: JohnDoe</span>
      </div>
      <div className="account-box">
        <span className="placeholder-text">Email: johndoe@example.com</span>
      </div>
      {/* Add more boxes with placeholder text as needed */}
    </div>
        </div>
        
    );
};

export default AccountScreen;
