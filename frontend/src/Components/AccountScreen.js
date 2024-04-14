// AccountScreen.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";

const AccountScreen = () => {
    return (
        <div>
            <Link to="/home">
                    <button id="returnhome-button">Home</button>
                </Link>
            <h1>My Account</h1>
        </div>
    );
};

export default AccountScreen;
