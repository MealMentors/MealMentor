// //schedule.js
// import React, { useRef, useState } from 'react'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import AddEventModal from "./AddEventModal"
// import "./Style/Schedule.css"
// import axios from "axios"
// import moment from "moment"
//
// export default function Schedule() {
//   const [modalOpen, setModalOpen] = useState(false)
//   const [events, setEvents] = useState([])
//   const calendarRef = useRef(null)
//
//   const onEventAdded = (event) => {
//     const calendarApi = calendarRef.current.getApi()
//     calendarApi.addEvent({
//       start: moment(event.start).toDate(),
//       title: event.title
//     })
//   }
//
//   async function handleEventAdd(data) {
//     console.log(data.event);
//     await axios.post("/api/calendar/create-event", data.event);
//   }
//
//   async function handleDatesSet(data) {
//     const response = await axios.get(`/api/calendar/get-events?start=${moment(data.start).toISOString()}
//                                                   &end=${moment(data.end).toISOString()}`);
//     setEvents(response.data); // Assuming response data is the array of events
//   }
//
//
//   return (
//     <section>
//
//       <div style={{ position: "relative", zIndex: 0 }}>
//         <div className="schedule-header">
//
//             <a href="../home"><button id="home-button-btn">Back to Home</button></a>
//
//
//             <button onClick={() => setModalOpen(true)} id="add-meal-btn">Add Meal</button>
//
//         </div>
//
//         <div className = "calendar">
//           <FullCalendar
//             ref={calendarRef}
//             events={events}
//             plugins={[dayGridPlugin]}
//             initialView="dayGridMonth"
//
//
//             eventAdd={(event) => handleEventAdd(event)}
//             datesSet = {(date) => handleDatesSet(date)}
//           />
//         </div>
//       </div>
//
//       <AddEventModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)} // Close the modal when requested
//         onEventAdded={event => onEventAdded(event)}
//       />
//
//     </section>
//   );
// }

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
        //alert(a.data.length);
        for (let i = 0; i < a.data.length;i++) {
            onEventAdded({email:a.data[i].email,start:a.data[i].start,end:a.data[i].end,meal:a.data[i].meal});
        }
        //End of get
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

        setModalOpen(false); // Close the modal after adding the event
        if (x = 0) {
            fetchEvents(); // Re-fetch events to ensure the calendar is up to date
            x = 1;
        }
        
    };


    async function handleEventAdd(data) {
        // Ensure that `end` and `meal` properties exist in the data.event object
        // if (!data.event.meal) {
        //     console.error("The event must have 'end' and 'meal' properties");
        //     alert("The event must have 'end' and 'meal' properties");
        //     return; // Exit the function if the validation fails
        // }

        try {
            console.log("what")
            // Attempt to send a POST request to create an event
            const response = await axios.post("/create-event", data.event);
            console.log('Event created successfully:', response.data);
            // Additional code to handle the response, update UI, etc.
        } catch (error) {
            console.error('Failed to create event:', error);
            // Error handling, such as displaying an error message to the user
        }
    }


    // This function may not be necessary if you're fetching all events on mount
    // async function handleDatesSet(data) {
    //     const response = await axios.get(
    //         "/api/calendar/get-events?start=" + moment(data.start).toISOString()
    //         + "&end=" + moment(data.end).toISOString());
    //     setEvents(response.data);
    // }

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
                        eventAdd={event => handleEventAdd(event)}
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
