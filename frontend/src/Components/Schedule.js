//Schedule.js
import React, {useEffect, useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from "./AddEventModal";
import "./Style/Schedule.css";
import axios from "axios";
import moment from "moment";

export default function Schedule() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);
    let x = 0;
    // Fetch events when the component mounts and whenever dates are set
    useEffect(() => {
        fetchEvents();
    }, []);
    // Fetching user profile information from local storage or initializing it as an empty object
    const userProfile = JSON.parse(localStorage.getItem("users")) || {};
    const email = userProfile.email || "";
    
    const fetchEvents = async () => {
        //Code for get all existing events
        const a = await axios.post("http://localhost:8000/get-events", {
            email
        });
        
        // added so that events don't show up twice
        const fetchedEvents = a.data.map(event => ({
            ...event,
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.meal
        }));
        setEvents(fetchedEvents);
    };

    const onEventAdded = event => {
        console.log(event);
        let calendarApi = calendarRef.current.getApi();
        const fullCalendarEvent = {
            email: event.email, // Assuming you have an email property in the event object
            title: event.meal, // Assuming you want the meal name to be the title.
            start: event.start, // Already should be in the correct format (Date object or ISO string).
            end: event.end, // Make sure this is also in the correct format.
            // Include custom properties under `extendedProps`.
            extendedProps: {
                meal: event.meal
            }
        };

        // Add the event to the calendar
        calendarApi.addEvent(fullCalendarEvent);
        fetchEvents(); // Re-fetch events to ensure the calendar is up to date
        setModalOpen(false); // Close the modal after adding the event
        
        
    };


    return (
        <section>
            <div style={{position: "relative", zIndex: 0}}>
                <div className="schedule-header">
                    <a href="../home">
                        <button id="home-button-btn">Back to Home</button>
                    </a>
                    <button onClick={() => setModalOpen(true)} id="add-meal-btn">Add Meal</button>
                </div>
                <div className="calendar">
                    <FullCalendar
                        ref={calendarRef}
                        events={events}
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        // datesSet={date => handleDatesSet(date)} // Removed if not needed
                    />
                </div>
            </div>
            <AddEventModal isOpen={modalOpen}
                           onClose={() => setModalOpen(false)}
                           onEventAdded={event => onEventAdded(event)}/>
        </section>
    );
}
