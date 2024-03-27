import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from './AddEventModal';
import axios from "axios";

export default function Schedule() {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([])
  const calendarRef = useRef(null);

  const onEventAdded = event => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
    setModalOpen(false); // Close the modal after adding the event
  };

  async function handleEventAdd(data) {
    await axios.post("/api/calender/create-event", data.event)
  }

  async function handleDatesSet(data) {
    const response = await axios.get("/api/calender/get-events?start=")
  }

  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Meal</button>

      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          datesSet = {(date) => handleDatesSet(date)}
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Close the modal when requested
        onEventAdded={event => onEventAdded(event)}
      />
    </section>
  );
}