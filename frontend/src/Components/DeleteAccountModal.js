import React, { useRef, useState, useEffect } from 'react';
import { Link,useLocation } from "react-router-dom"; // Import useLocation correctly
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AccountScreen.css";

const DeleteAccountModal = ({ showModal, onClose, onDelete }) => {
    return (
      <>
        {showModal && (
          <Modal isOpen={true} onRequestClose={onClose}> {/* Use isOpen and onRequestClose instead of onClose */}
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete your account?</p>
            <div>
              <Link to="..">
              <button id="deleteacct-button" onClick={onDelete}>Delete</button>
              </Link>
              
              <button id="cancel-button" onClick={onClose}>Cancel</button>
            </div>
          </Modal>
        )}
      </>
    );
  };
  
  export default DeleteAccountModal;