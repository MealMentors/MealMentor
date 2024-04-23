// event.js
const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    email: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    meal: { type: String, required: true }
});

const Event = mongoose.model("events", EventSchema);

module.exports = {Event};
