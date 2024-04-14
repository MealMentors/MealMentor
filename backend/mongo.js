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
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const mealLog = new mongoose.Schema({
  userId: {
      type: String,
      required: true
  },
  meal: {
      type: String,
      required: true
  }

});

const mealSchedule = new mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  meal: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const recipes = new mongoose.Schema({
  RecipeName: {
      type: String,
      required: true
  },
  Website: {
      type: String,
      required: true
  },
  Servings: {
    type: String,
    required: false
  },
  Calories: {
    type: String,
    required: false
  },
  Protein: {
    type: String,
    required: false
  },
  Fat: {
    type: String,
    required: false
  },
  Carbs: {
    type: String,
    required: false
  },
  Servings: {
    type: String,
    required: false
  },
  Protein2: {
    type: String,
    required: false
  }
});

const usercollection = mongoose.model("users", userSchema);
const logcollection = mongoose.model("meallogs", mealLog);
const schedulecollection = mongoose.model("mealschedules", mealSchedule);
const recipecollection = mongoose.model("recipes", recipes);

module.exports = {usercollection,logcollection,schedulecollection,recipecollection};