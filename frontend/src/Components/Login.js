import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Login.css";

import email_icon from "./Assets/email_icon.png";
import password_icon from "./Assets/password_icon.png";

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/", {
                email, name, password
            });
    
            if (password === response.data.password) {
                // Store user information in local storage
                const userData = { name: response.data.name, email: response.data.email };
                localStorage.setItem("users", JSON.stringify(userData));
                
                // Redirect to home with user information
                history("/home", { state: userData });
            } else {
                alert("Username or Password is Incorrect");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="login">

                    <h1 className="d-flex justify-content-center">Login</h1><br></br>

                    <form action="POST" class="login-form">
                        {/* THIS IS FOR EMAIL*/}
                        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                            <img src={email_icon} alt="email_icon.png" style={{ marginInlineEnd: '0.6em' }} />
                            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
                        </div>
                        {/* THIS IS FOR PASSWORD*/}
                        <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em' }}>
                            <img src={password_icon} alt="password_icon.png" style={{ marginInlineEnd: '0.6em' }} />
                            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />
                        </div>
                        {/* <input type="submit" className="form-control bg-success text-white" onClick={submit} /> */}

                        <button type="submit" id="login-btn" onClick={submit}>Login</button>

                    </form>
                    <br />


                    <p id="loginlink">No account? <Link to="/signup">Sign up here!</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login