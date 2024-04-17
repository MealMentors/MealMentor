//event.js
const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    email: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    meal: { type: String, required: true }
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
