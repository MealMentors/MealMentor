import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Recommender.css";

export default function Recommender() {


    function formSubmission() {
        //var ltgtcalories = document.querySelector('input[name="calorieselection"]:checked');
        try {
            var ltgtcalories = document.querySelector('input[name="calorieselection"]:checked').value;
            var calories = document.getElementById("caltextinput").value;
            var ltgtprotein = document.querySelector('input[name="proteinselection"]:checked').value;
            var protein = document.getElementById("ptextinput").value;
            var ltgtfat = document.querySelector('input[name="fatselection"]:checked').value;
            var fat = document.getElementById("ftextinput").value;
            var ltgtcarbs = document.querySelector('input[name="carbselection"]:checked').value;
            var carbs = document.getElementById("ctextinput").value;
            var data = {
                ltgtcalories: ltgtcalories,
                calories: calories,
                ltgtprotein: ltgtprotein,
                protein: protein,
                ltgtfat: ltgtfat,
                fat: fat,
                ltgtcarbs: ltgtcarbs,
                carbs: carbs
            }
            alert("Calories " + ltgtcalories + " " + calories + "\nProtein (g) " + ltgtprotein + " " + protein + "\nFat (g) " + ltgtfat + " " + fat + "\nCarbs (g) " + ltgtcarbs + " " + carbs);
        } catch {
            alert("Wrong Input");
        }
    }
    /*function addListener() {
        try {
            document.getElementById('myForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent form submission
                formSubmission();
            });
        } catch {
            alert("No Form");
        }
    }*/

    useEffect(() => {
        document.getElementById('myForm').addEventListener('submit', formSubmission);

        return () => {
            //document.getElementById('myForm').removeEventListener('submit', formSubmission);
        };
    }, []);

    return (
        <form id = "myForm">
            <div className="selectioncolumn">
                <div className="selection">
                    <div>Calories</div>
                    <input type="radio" id="callessthan" name="calorieselection" value="lessthan" checked />
                    <label for="callessthan">Are Less Than</label>
                    <input type="radio" id="calgreaterthan" name="calorieselection" value="greaterthan" />
                    <label for="calgreaterthan">Are Greater Than</label>
                    <input type="text" id="caltextinput" name="calorieinput" />
                </div>
                <div className="selection">
                    <div>Protein (g)</div>
                    <input type="radio" id="plessthan" name="proteinselection" value="lessthan" checked />
                    <label for="plessthan">Are Less Than</label>
                    <input type="radio" id="pgreaterthan" name="proteinselection" value="greaterthan" />
                    <label for="pgreaterthan">Are Greater Than</label>
                    <input type="text" id="ptextinput" name="proteininput" />
                </div>
                <div className="selection">
                    <div>Fat (g)</div>
                    <input type="radio" id="flessthan" name="fatselection" value="lessthan" checked />
                    <label for="flessthan">Are Less Than</label>
                    <input type="radio" id="fgreaterthan" name="fatselection" value="greaterthan" />
                    <label for="fgreaterthan">Are Greater Than</label>
                    <input type="text" id="ftextinput" name="fatinput" />
                </div>
                <div className="selection">
                    <div>Carbs (g)</div>
                    <input type="radio" id="clessthan" name="carbselection" value="lessthan" checked />
                    <label for="clessthan">Are Less Than</label>
                    <input type="radio" id="cgreaterthan" name="carbselection" value="greaterthan" />
                    <label for="cgreaterthan">Are Greater Than</label>
                    <input type="text" id="ctextinput" name="carbsinput" />
                </div>
                <div className="selection">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )

}