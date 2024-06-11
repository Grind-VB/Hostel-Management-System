import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './EventCalendar.css'; // Import any additional CSS styles for the calendar

function EventCalendar() {
  return (
    <div className="event-calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          // Your event data goes here
          { title: 'Event 1', date: '2024-06-01' },
          { title: 'Event 2', date: '2024-06-10' },
          // Add more events as needed
        ]}
      />
    </div>
  );
}

export default EventCalendar;
