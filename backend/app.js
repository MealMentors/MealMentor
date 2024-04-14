// backend app.js

const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    // route handlers
});

app.post("/", async (req, res) => {
    const{email,name,password}=req.body

    try{
        const check = await collection.usercollection.findOne({email:email})

        if(check){
            const userData = {  //Creates a userData object with which to compare and use email, name, and password
                email: email,
                name: check.name,
                password: check.password
            } 
            res.json(userData) //Returns object, access with response.data.email format
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }
});

app.post("/signup", async (req, res) => {
    const { email, name, password } = req.body;
    const userData = {
        email: email,
        name: name,
        password: password
    };

    try {
        const check = await collection.usercollection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.usercollection.create(userData);
        }
    } catch (error) {
        res.json("fail");
    }
});

app.post("/accountdel", async (req, res) => {
    const { email, name, password } = req.body;
    const userData = {
        email: email,
        name: name,
        password: password
    };

    try {

        
        res.json("exist");
        await collection.usercollection.findOneAndDelete({email:email});
        
    } catch (error) {
        res.json("fail");
    }
});
/*
async function accountdel(e) {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:8000/signup", {
            email, name, password
        });

        if (response.data === "exist") {
            history("/home", { state: { email, name } })
            alert("Account deleted");
            return;
        } else if (response.data === "notexist") {
            showErrorNotification("User already exists");
            alert("User already exists");
        }
    } catch (error) {
        showErrorNotification("Something went wrong. Please try again.");
        console.error(error);
    }
}*/

app.post("/schedule", async (req, res) => {
    const { email, date, time, meal } = req.body;
    const userData = {  //Creates a userData object with which to compare and use email, name, and password
        email: email,
        date: date,
        time: time,
        meal: meal
    } 
    try {
        //const check = await collection.schedulecollection.findOne({ userId: userId });
        
        collection.schedulecollection.create(userData);

    } catch (error) {
        res.json("fail");
    }
});

app.use("/api/calendar", require("./controllers/calendarcontroller"))
app.listen(8000, async () => {
    console.log("port connected");
});