import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [name] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, name, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
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
                <div className="login">

                    <h1 className="d-flex justify-content-center">Login</h1><br></br>

                    <form action="POST">
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-0" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control rounded-0" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />
                        </div>
                        <br></br>
                        <input type="submit" className="form-control bg-success text-white" onClick={submit} />

                    </form>
                    <br />


                    <p id="loginlink">No account? <Link to="/signup">Sign up here!</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login