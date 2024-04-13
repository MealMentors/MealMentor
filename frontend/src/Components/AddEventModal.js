import React, {useRef, useState} from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime'
import axios from "axios";

export default function ({isOpen, onClose, onEventAdded}) {

    const [userId, setUserId] = useState("");
    const [meal, setMeal] = useState("");
    const [date, setDate] = useState(new Date());

    const onSubmit = (event) =>  {
        event.preventDefault()
        
        onEventAdded({
            meal,
            date
        })

        onClose()
    }

    async function submit(e) {
      e.preventDefault();

      try {
          const response = await axios.post("http://localhost:8000/schedule", {
              userId, date, meal
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
              <Datetime value={date} onChange={e => setDate(e.target.value)} placeholder="Date" />
              </div>           

            <button type="submit" onClick={submit}>Add Meal</button>
          </form>
        </Modal>
      ) 
    };
