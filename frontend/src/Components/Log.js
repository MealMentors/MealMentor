import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Log.css";


function Log() {

    const history = useNavigate();

    const [userId, getUserId] = useState('');
    const [meal, addMeal] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                userId, meal
            });

            alert(userId);
            
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
    document.body.style.height = "720px";
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="log">

                    <h1 className="d-flex justify-content-center">Log</h1><br></br>

                    <form action="POST" class="log-form">
                        {/* THIS IS FOR MEAL*/}
                        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                            <input type="meal" className="form-control" onChange={(e) => { addMeal(e.target.value) }} placeholder="Meal" name="" id="" />
                        </div>
                        {/* <input type="submit" className="form-control bg-success text-white" onClick={submit} /> */}

                        <button type="submit" id="log-btn" onClick={submit}>Log</button>

                    </form>
                    <br />


                </div>
            </div>
        </div>
    )
}

export default Log