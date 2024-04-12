// mongo.js
const mongoose = require("mongoose");

// Load environment variables from .env file
require('dotenv').config();

// Establish MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error("MongoDB connection failed:", error);
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", userSchema);

module.exports = collection;