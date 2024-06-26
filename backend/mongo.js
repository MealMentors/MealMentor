// // mongo.js
require('dotenv').config();

const mongoose = require("mongoose");

// Establish MongoDB connection using the URI from the .env file
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error("MongoDB connection failed:", error);
});

// Define a schema for users
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Define a schema for the meal schedule
const mealSchedule = new mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  start: {
    type: Date,
    required: false
  },
  end: {
    type: Date,
    required: false
  },
  meal: {
    type: String,
    required: false
  }

});

// Define a schema for recipes
const recipesSchema = new mongoose.Schema({
  RecipeName: {
    type: String,
    required: true
  },
  Website: {
    type: String,
    required: true
  },
  // Additional fields for recipes
  Servings: {
    type: String,
    required: false
  },
  Calories: {
    type: Number,
    required: false
  },
  ProteinG: {
    type: Number,
    required: false
  },
  Fat: {
    type: Number,
    required: false
  },
  Carbs: {
    type: Number,
    required: false
  },
  Type: {
    type: String,
    required: false
  },
  Cuisine: {
    type: String,
    required: false
  },
  ProteinType: {
    type: String,
    required: false
  }
});

const EventSchema = new mongoose.Schema({
  email: { type: String, required: true },
  start: { type: Date, required: false },
  end: { type: Date, required: false },
  meal: { type: String, required: false }
});


// Create models from the above schemas
const usercollection = mongoose.model("users", userSchema);
const schedulecollection = mongoose.model("mealschedules", mealSchedule);
const recipecollection = mongoose.model("recipes", recipesSchema);
const eventcollection = mongoose.model("events", EventSchema);

// Export the models for use in the app
module.exports = {usercollection, schedulecollection, recipecollection, eventcollection};
