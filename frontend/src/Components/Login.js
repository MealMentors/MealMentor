// export default Login


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Login.css";

import email_icon from "./Assets/email_icon.png";
import password_icon from "./Assets/password_icon.png";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/login", {
                email, password
            });

            if (response.status === 200) {
                const userData = { name: response.data.user.name, email: response.data.user.email };
                localStorage.setItem("users", JSON.stringify(userData));
                navigate("/home", { state: userData });
            } else {
                setErrorMessage("Invalid credentials. Please try again.");
            }
        } catch (error) {
            if (error.response) {
                // The server responded with a status code that indicates failure (e.g., 401)
                setErrorMessage(error.response.data.message || "Invalid credentials. Please try again.");
            } else {
                // No response was received, indicating a network error or server downtime
                setErrorMessage("There was a problem connecting to the server.");
            }
            console.error("Login Error:", error.response || error);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="login">
                    <Link to="/"><div className="title"><div className="navlink">MealMentor</div></div></Link>
                    <h1 className="d-flex justify-content-center">Login</h1><br></br>
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    <form onSubmit={submit} className="login-form">
                        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                            <img src={email_icon} alt="email_icon.png" style={{ marginInlineEnd: '0.6em' }} />
                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                            <img src={password_icon} alt="password_icon.png" style={{ marginInlineEnd: '0.6em' }} />
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button type="submit" id="login-btn">Login</button>
                    </form>
                    <br />
                    <p id="loginlink">No account? <Link to="/signup">Sign up here!</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
