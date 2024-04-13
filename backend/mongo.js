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
  userId: {
      type: String,
      required: true
  },
  date: {
      type: String,
      required: true
  },
  time: {
      type: String,
      required: true
  },
  meal: {
    type: String,
    required: true
  }
});

const usercollection = mongoose.model("users", userSchema);
const logcollection = mongoose.model("meallog", mealLog);
const schedulecollection = mongoose.model("mealschedule", mealSchedule);

module.exports = {usercollection,logcollection,schedulecollection};