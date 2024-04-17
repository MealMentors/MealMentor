// // backend app.js
//
// const express = require("express");
// const collection = require("./mongo");
// const users = collection.usercollection;
// const schedule = collection.schedulecollection;
// const recipes = collection.recipecollection;
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
//
// app.get("/", cors(), (req, res) => {
//     // route handlers
// });
//
// app.post("/login", async (req, res) => {
//     const{email,name,password}=req.body
//
//     try{
//         const check = await users.findOne({email:email})
//
//         if(check){
//             const userData = {  //Creates a userData object with which to compare and use email, name, and password
//                 email: email,
//                 name: check.name,
//                 password: check.password
//             }
//             res.json(userData) //Returns object, access with response.data.email format
//             res.status(201).json({ message: "Resource created successfully" });
//
//         }
//         else{
//             res.json("notexist")
//         }
//
//     }
//     catch(e){
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });
//
// app.post("/signup", async (req, res) => {
//     const { email, name, password } = req.body;
//     const userData = {
//         email: email,
//         name: name,
//         password: password
//     };
//
//     try {
//         const check = await users.findOne({ email: email });
//
//         if (check) {
//             res.json("exist");
//         } else {
//             res.json("notexist");
//             await users.create(userData);
//             res.status(201).json({ message: "Resource created successfully" });
//
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });
//
// app.post("/accountdel", async (req, res) => {
//     const { email, name, password } = req.body;
//     const userData = {
//         email: email,
//         name: name,
//         password: password
//     };
//
//     try {
//
//         res.json("exist");
//         await collection.usercollection.findOneAndDelete({email:email});
//
//     } catch (error) {
//         res.status(500).json({error: "Internal Server Error"});
//     }
// });
//
//
// app.post("/home/schedule", async (req, res) => {
//     const { email, date, time, meal } = req.body;
//     const userData = {  //Creates a userData object with which to compare and use email, name, and password
//         email: email,
//         date: date,
//         time: time,
//         meal: meal
//     }
//     try {
//         //const check = await collection.schedulecollection.findOne({ userId: userId });
//
//         schedule.create(userData);
//         res.status(201).json({ message: "Resource created successfully" });
//
//
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//
//     }
// });
//
// app.post("/home/recommend", async (req, res) => {
//     const { RecipeName,Website,Servings,Type,Cuisine,Calories,ProteinG,Fat,Carbs,CaloriesOp,ProteinGOp,FatOp,CarbsOp,CaloriesVal,ProteinGVal,FatVal,CarbsVal, } = req.body;
//     const userData = {  //Creates a userData object with which to compare and use email, name, and password
//         //RecipeName:RecipeName,
//         //Website:Website,
//         //Servings:Servings,
//         //Type:Type,
//         //Cuisine: Cuisine,
//         Calories:Calories,ProteinG:ProteinG,Fat:Fat,        Carbs:Carbs,
//         CaloriesOp:CaloriesOp,        ProteinGOp:ProteinGOp,        FatOp:FatOp,        CarbsOp:CarbsOp,
//         CaloriesVal:CaloriesVal,        ProteinGVal:ProteinGVal,        FatVal:FatVal,        CarbsVal:CarbsVal,
//     }
//     try {
//
//         const arr = await recipes.find({Calories:{CaloriesOp:CaloriesVal},ProteinG:{ProteinGOp:ProteinGVal},Fat:{FatOp:FatVal},Carbs:{CarbsOp:CarbsVal} });
//
//         res.json(arr);
//
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" });
//
//     }
// });
// /*
// async function submit(e) {
//     e.preventDefault();
//
//     try {
//         const response = await axios.post("http://localhost:8000/recommender", {
//             Calories,ProteinG,Fat,Carbs,CaloriesOp,ProteinGOp,FatOp,CarbsOp,CaloriesVal,ProteinGVal,FatVal,CarbsVal
//         });
//
//         alert(response);
//
//     } catch (error) {
//         showErrorNotification("Something went wrong. Please try again.");
//         console.error(error);
//     }
// }
//
// function showErrorNotification(message) {
//     const notificationElement = document.createElement("div");
//     notificationElement.classList.add("error-notification");
//     notificationElement.textContent = message;
//     document.body.appendChild(notificationElement);
//     setTimeout(() => {
//         document.body.removeChild(notificationElement);
//     }, 5000);
// }*/
//
// app.use("/api/calendar", require("./controllers/calendarcontroller"))
// app.listen(8000, async () => {
//     console.log("port connected");
// });



// backend app.js
const express = require("express");
const bcrypt = require('bcrypt');
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const users = collection.usercollection;
const schedule = collection.schedulecollection;
const recipes = collection.recipecollection;

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

// Add schedule endpoint
// app.post("/home/schedule", async (req, res) => {
//     const { email, date, time, meal } = req.body;
//
//     try {
//         const newEvent = await schedule.create({ email, date, time, meal });
//         res.status(201).json(newEvent);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// app.js - within the /home/schedule endpoint
app.post("/home/schedule", async (req, res) => {
    const { email, date, time, meal } = req.body;

    if (!email || !date || !time || !meal) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newEvent = new Event({ email, date, time, meal });
        await newEvent.save();
        res.status(201).json(newEvent);
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

const calendarController = require('./controllers/calendarcontroller'); // Update the path to the actual location
app.use('/api/calendar', calendarController);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});

module.exports = app;
