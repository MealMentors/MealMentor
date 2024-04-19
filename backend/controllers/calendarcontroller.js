// //calendarcontroller.js
// const router = require("express").Router();
// const event = require("../models/event")
// const moment = require("moment")
//
// router.post("/api/calendar/create-event", async (req,res)  => {
//
//     const event = event(req.body)
//     await event.save();
//     res.sendStatus(201)
// })
//
// router.get("/api/calendar/get-events", async(req, res) => {
//     const events = await Event.find({
//         start : { $gte : moment(req.query.start).toDate() },
//         end : { $lte : moment(req.query.end).toDate() },
//     });
//
//     res.send(events)
//
// });
//
// module.exports = router;

// calendarcontroller.js
const router = require("express").Router();
const Event = require("../models/event");

// Create a new calendar event
router.post("/create-event", async (req, res) => {
    try {
        const newEvent = new Event({
            email: req.body.email,
            start: req.body.start,
            end: req.body.end,
            meal: req.body.meal
        });

        await newEvent.save();
        res.status(201).json({ message: "Event created successfully", event: newEvent });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
});

// Get events within a date range
// router.get("/get-events", async (req, res) => {
//     try {
//         const { start, end } = req.query;
//         if (!start || !end) {
//             return res.status(400).json({ message: "Start and end dates are required." });
//         }
//
//         const events = await Event.find({
//             start: { $gte: moment(start).toDate() },
//             end: { $lte: moment(end).toDate() }
//         });
//
//         res.status(200).json(events);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal Server Error", error: error });
//     }
// });

router.get("/get-events", async (req, res) => {
    try {
        // Validate query parameters
        if (!req.query.start || !req.query.end) {
            return res.status(400).json({ error: "Start and end date parameters are required." });
        }

        // Parse dates using moment
        const startDate = moment(req.query.start).startOf('day').toDate();
        const endDate = moment(req.query.end).endOf('day').toDate();

        // Find events within the date range
        const events = await Event.find({
            email: req.user.email,
            start: { $gte: startDate },
            end: { $lte: endDate },
            meal: { $exists: true }
        });

        res.send(events);
    } catch (error) {
        console.error("Failed to fetch events:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
