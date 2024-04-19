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

    // Fetch events when the component mounts and whenever dates are set
    // useEffect(() => {
    //     fetchEvents();
    // }, []);

    // const fetchEvents = async () => {
    //     try {
    //         // Make sure this URL is correct based on your backend setup
    //         const response = await axios.get("http://localhost:8000/api/calendar/get-events", {
    //             params: {
    //                 start: moment().startOf('month').toISOString(),
    //                 end: moment().endOf('month').toISOString(),
    //             }
    //         });
    //
    //         setEvents(response.data.map(event => ({...event, start: new Date(event.start)})));
    //     } catch (error) {
    //         console.error("Error fetching events:", error);
    //         alert("Error fetching events.");
    //     }
    // };

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
        // fetchEvents(); // Re-fetch events to ensure the calendar is up to date
    };


    async function handleEventAdd(data) {
        // Ensure that `end` and `meal` properties exist in the data.event object
        // if (!data.event.meal) {
        //     console.error("The event must have 'end' and 'meal' properties");
        //     alert("The event must have 'end' and 'meal' properties");
        //     return; // Exit the function if the validation fails
        // }

        try {
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
