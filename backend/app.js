// backend app.js
const express = require("express");
const bcrypt = require('bcrypt');
const collection = require("./mongo");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
// from mikolaj code: https://www.youtube.com/watch?v=Q8NV4koY7nU&t=913s

// const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const users = collection.usercollection;
const schedule = collection.schedulecollection;
const recipes = collection.recipecollection;
const ev = collection.eventcollection;


app.listen(8000, () => {
    console.log("Server running on port 8000");
});

// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await users.findOne({ email: email});
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // If password matches, proceed with login process
        res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const existingUser = await users.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({
            email,
            name,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: { email, name } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Account deletion endpoint
app.post("/accountdel", async (req, res) => {
    const { email } = req.body;

    try {
        const result = await users.findOneAndDelete({ email: email });
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// app.js - within the /home/schedule endpoint
app.post("/home/schedule", async (req, res) => {
    const { email, start, end, meal } = req.body;

    if (!email || !start || !end || !meal) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newEvent = new Event({ email, start, end, meal });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/home/schedule", async (req, res) => {
    try {
        const events = await mealschedules.find();
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Recommend endpoint
app.post("/home/recommend", async (req, res) => {
    const { CaloriesOp, ProteinGOp, FatOp, CarbsOp, CaloriesVal, ProteinGVal, FatVal, CarbsVal } = req.body;
    const query = {
        Calories: { [CaloriesOp]: CaloriesVal },
        ProteinG: { [ProteinGOp]: ProteinGVal },
        Fat: { [FatOp]: FatVal },
        Carbs: { [CarbsOp]: CarbsVal }
    };

    try {
        const recommendations = await recipes.find(query);
        res.status(200).json(recommendations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Create a new calendar event
app.post("/create-event", async (req, res) => {
    const { email, start, end, meal } = req.body;
    const newEvent = {
        email: email,
        start: start,
        end: end,
        meal: meal
    };
    try {
        console.log("Adding new event");
        await ev.create(newEvent);
        res.status(201).json({ message: "Event created successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
});

app.post("/get-events", async (req, res) => {
    const { email } = req.body;
    const newEvent = {
        email: email
    };
    console.log("Getting user's events");
    console.log(email);
    const check = await ev.findOne({ email });
    console.log("Email found");
    console.log(check);
    if (check) {
        console.log("Check passed");
        const arr = await ev.find({email});
        const a = Array.from(arr);
        console.log("Sending");
        console.log(a.length);
        let i = 0;
        console.log(a[i].email);
        console.log(a[i].meal);
        console.log(a[i].start);
        console.log(a[i].end);
        return res.send(a);
    }
    
});

module.exports = app;
