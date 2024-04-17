import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DeleteAccountModal from "./DeleteAccountModal";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";

import account_profile from "./Assets/account_profile.png";


const AccountScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const userProfile = JSON.parse(localStorage.getItem("users")) || {};
  const [name, setUserName] = useState(userProfile.name || "");
  const [email, setUserEmail] = useState(userProfile.email || "");

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

  async function accountdel() {
    try {
        const response = await axios.post("http://localhost:8000/accountdel", {
            email, name
        });

        alert("Account deleted");
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div>
      <Link to="/home">
        <button id="returnhome-button">Home</button>
      </Link>
      <h1>My Account</h1>
      <div className="account-container">
  <img src={account_profile} alt="Example Image" className="account-image" /> {/* Added class here */}
  <p className="info-label">Name</p>
  <div className="account-box">
    <span className="placeholder-text">{name}</span>
  </div>
  <p className="info-label">Email</p>
  <div className="account-box">
    <span className="placeholder-text">{email}</span>
  </div>
</div>
      <button id="deletemodal-button" onClick={handleOpenModal}>Delete Account</button>
      <DeleteAccountModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onDelete={() => {
          console.log("Deleting account...");
          accountdel();
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default AccountScreen;
