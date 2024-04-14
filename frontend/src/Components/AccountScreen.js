import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DeleteAccountModal from "./DeleteAccountModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";

const AccountScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem("users")) || {};
  const [userName, setUserName] = useState(userProfile.name || "");
  const [userEmail, setUserEmail] = useState(userProfile.email || "");

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Modal opened");

  };

  useEffect(() => {
    if (location.state && location.state.name) {
      setUserName(location.state.name);
      localStorage.setItem("users", JSON.stringify({ ...userProfile, name: location.state.name }));
    }

    if (location.state && location.state.email) {
      setUserEmail(location.state.email);
      localStorage.setItem("users", JSON.stringify({ ...userProfile, email: location.state.email }));
    }
  }, [location.state, userProfile]);

  return (
    <div>
      <Link to="/home">
        <button id="returnhome-button">Home</button>
      </Link>
      <h1>My Account</h1>
      <div className="account-container">
        <p>Name</p>
        <div className="account-box">
          <span className="placeholder-text">{userName}</span>
        </div>
        <p>Email</p>
        <div className="account-box">
          <span className="placeholder-text">{userEmail}</span>
        </div>
      </div>
      <button id="deleteacct-button" onClick={handleOpenModal}>Delete Account</button>
      <DeleteAccountModal
  showModal={showModal}
  onClose={() => setShowModal(false)}
  onDelete={() => {
    // Logic to delete account can be handled here
    console.log("Deleting account...");
    // Close the modal after deletion
    setShowModal(false);
  }}
/>
    </div>
  );
};

export default AccountScreen;
