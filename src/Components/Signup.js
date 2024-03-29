import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {
    const history = useNavigate();


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, name, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                    }
                    else if (res.data === "notexist") {
                        history("/home", { state: { id: email } })

                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="d-flex justify-content-center align-items-center bg-primary.bg-gradient vh-100">
            <div className="bg-white p-3 rounded w-25">
                <div className="signup">

                    <h1 className="d-flex justify-content-center">Signup</h1><br></br>

                    <form action="POST">
                        <div className="mb-3">
                            <input type="Name" className="form-control rounded-0" onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-0" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control rounded-0" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </div>
                        <br></br>
                        <input type="submit" className="form-control bg-success text-white" onClick={submit} />

                    </form>

                    <br />

                    <p id="loginlink">Already have an account? <Link to="/" className="justify-content-center">Login here!</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login