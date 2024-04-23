// // export default Login
//
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style/Signup.css";
//
// import person_icon from "./Assets/person_icon.png";
// import email_icon from "./Assets/email_icon.png";
// import password_icon from "./Assets/password_icon.png";
//
//
// function Signup() {
//     const history = useNavigate();
//
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//
//     async function submit(e) {
//         e.preventDefault();
//
//         // Email validation regular expression
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//
//         if (!emailRegex.test(email)) {
//             setErrorMessage('Invalid email format');
//             return;
//         }
//         else {
//             setErrorMessage('');
//         }
//
//         try {
//             const response = await axios.post("http://localhost:8000/signup", {
//                 email, name, password
//             });
//
//             if (response.data === "exist") {
//                 showErrorNotification("User already exists");
//                 alert("User already exists");
//                 return;
//             } else if (response.data === "notexist") {
//                 history("/home", { state: { email, name } })
//             }
//         } catch (error) {
//             showErrorNotification("Something went wrong. Please try again.");
//             console.error(error);
//         }
//     }
//
//     function showErrorNotification(message) {
//         const notificationElement = document.createElement("div");
//         notificationElement.classList.add("error-notification");
//         notificationElement.textContent = message;
//         document.body.appendChild(notificationElement);
//         setTimeout(() => {
//             document.body.removeChild(notificationElement);
//         }, 5000);
//     }
//     document.body.style.height = "720px";
//     return (
//         <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <div className="signup">
//                     <h1 className="d-flex justify-content-center">Signup</h1><br></br>
//                     {errorMessage && <p className="text-danger">{errorMessage}</p>}
//                     <form action="POST" class="signup-form">
//                         {/* THIS IS FOR NAME*/}
//                         <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
//                             <img src={person_icon} alt="person_icon.png" style={{ marginInlineEnd: '0.6em' }} />
//                             <input type="Name" className="form-control" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
//                         </div>
//
//                         {/* THIS IS FOR EMAIL*/}
//                         <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
//                             <img src={email_icon} alt="email.png" style={{ marginInlineEnd: '0.6em' }} />
//                             <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
//                         </div>
//
//                         {/* THIS IS FOR PASSWORD*/}
//                         <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
//                             <img src={password_icon} alt="password_icon.png" style={{ marginInlineEnd: '0.6em' }} />
//                             <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                         </div>
//                         <button type="submit" id="signup-btn" onClick={submit}>Sign Up</button>
//
//                     </form>
//                     <br />
//                     <p id="loginlink">Already have an account? <Link to="/login" className="justify-content-center">Login here!</Link></p>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Signup;

import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Signup.css";

import person_icon from "./Assets/person_icon.png";
import email_icon from "./Assets/email_icon.png";
import password_icon from "./Assets/password_icon.png";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function submit(e) {
        e.preventDefault();

        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setErrorMessage('Invalid email format');
            return;
        } else {
            setErrorMessage('');
        }

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email, name, password
            });

            if (response.status === 201) { // User created successfully
                history("/home", {state: {email, name}});
            } else {
                setErrorMessage(response.data.message || "An error occurred");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
            console.error("Signup Error:", error.response || error);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="signup">
                    <Link to="/"><div className="title"><div className="navlink">MealMentor</div></div></Link>
                    <h1 className="d-flex justify-content-center">Signup</h1><br></br>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <form action="POST" className="signup-form">

                        {/* THIS IS FOR NAME*/}
                        <div className="mb-3" style={{display: 'flex', alignItems: 'center', marginBottom: '0.5em'}}>
                            <img src={person_icon} alt="person_icon.png" style={{marginInlineEnd: '0.6em'}}/>
                            <input type="Name" className="form-control" onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder="Name"/>
                        </div>

                        {/* THIS IS FOR EMAIL*/}
                        <div className="mb-3" style={{display: 'flex', alignItems: 'center', marginBottom: '0.5em'}}>
                            <img src={email_icon} alt="email.png" style={{marginInlineEnd: '0.6em'}}/>
                            <input type="email" className="form-control" onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder="Email"/>
                        </div>

                        {/* THIS IS FOR PASSWORD*/}
                        <div className="mb-3" style={{display: 'flex', alignItems: 'center', marginBottom: '0.5em'}}>
                            <img src={password_icon} alt="password_icon.png" style={{marginInlineEnd: '0.6em'}}/>
                            <input type="password" className="form-control" onChange={(e) => {
                                setPassword(e.target.value)
                            }} placeholder="Password"/>
                        </div>
                        <button type="submit" id="signup-btn" onClick={submit}>Sign Up</button>

                    </form>
                    <br/>
                    <p id="loginlink">Already have an account? <Link to="/login" className="justify-content-center">Login
                        here!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;
