import React from "react"
import {useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Home.css";


function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Hello {} and welcome to the homepage</h1>

            

        </div>
    )
}

export default Home;