import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEventModal from "./AddEventModal"
import "./Style/Schedule.css"
//import axios from "axios"
import moment from "moment"

export default function Schedule() {
  const [modalOpen, setModalOpen] = useState(false)
  const [events, setEvents] = useState([])
  const calendarRef = useRef(null)

  const onEventAdded = (event) => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start:moment(event.start).toDate(), 
      end: moment(event.end).toDate(),
      title: event.title
    })
  }
/*
  async function handleEventAdd(data) {
    console.log(data.event)
    await axios.post("/api/calender/create-event", data.event)
  }

  async function handleDatesSet(data) {
    const response = await axios.get
    ("/api/calender/get-events?start="+ moment(data.start).toISOString()+
    "&end="+
    moment(data.end).toISOString())
  }
*/
  return (
    <section>

      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          //eventAdd={(event) => handleEventAdd(event)}
          //datesSet = {(date) => handleDatesSet(date)}
        />
      </div>
      <button onClick={() => setModalOpen(true)} id="add-meal-btn">Add Meal</button>
      <a href="../home"><button id="home-button">Back to Home</button></a>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Close the modal when requested
        onEventAdded={event => onEventAdded(event)}
      />
      
    </section>
  );
}