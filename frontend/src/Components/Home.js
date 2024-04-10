import React from "react"
import {useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Home.css";


function Home (){
    const location=useLocation()
    const userName = location.state && location.state.name ? location.state.name : '';

    return (
        <div className="homepage">

            <h1>Hello {userName && ` ${userName}`}, and welcome to the homepage!</h1>
            <div className="button-func-div">
            <a href="/home/catalog"><button id="home-button">catalog</button></a>
            <a href="home/schedule"><button id="home-button">scheduling</button></a>
            <a href="home/recommend"><button id="home-button">recommend me a meal</button></a>
            <a href="home/log"><button id="home-button">logging</button></a>

            </div>

    

        </div>
    )
}

export default Home;