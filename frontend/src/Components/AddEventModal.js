import React, {useRef, useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Home.css";

export default function ({isOpen, onClose, onEventAdded}) {


    const [meal, setMeal] = useState("");
    const [date, setDate] = useState(new Date());

    // Fetching user profile information from local storage or initializing it as an empty object
    const userProfile = JSON.parse(localStorage.getItem("users")) || {};

    // State to hold the user's name
    const [email, setEmail] = useState(userProfile.email || "");
    
    const onSubmit = (event) =>  {
        event.preventDefault()
        
        onEventAdded({
            date
        })

        onClose()
    }

    async function submit(e) {
      e.preventDefault();

      try {
          onClose();
          const response = await axios.post("http://localhost:8000/schedule", {
              email, date, meal
          });

          
      } catch (error) {
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
        <Modal isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={onSubmit}>
            <input type="meal" onChange={e => setMeal(e.target.value)} placeholder="Meal"/>
            <div>
              <label>Date</label>
              <Datetime value={date} onChange={date => setDate(date)} placeholder="Date" />
              
              </div>           
            <button type="submit" onClick={submit}>Add</button>
            
          </form>
        </Modal>
      ) 
    };