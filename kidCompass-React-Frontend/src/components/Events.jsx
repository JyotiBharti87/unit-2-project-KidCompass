import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../App.css";

function Events() {
  const navigate = useNavigate();

  // Temporary parent id used to create events
  const parentId = 2;

  //state to store events from backend
  const[events, setEvents] = useState ([]);

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    eventDateTime: "",
    location: "",
    description: "",
  });

  // Get events from Spring Boot API
  useEffect(() => {
    fetch("http://localhost:8080/api/events")
        .then((response) => response.json())
        .then((data) => {
          setEvents(data);
        });
  }, []);

  //handle changes from input

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Add a new Event or Update an existing event

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure required fields are filled out
    if (!formData.title || !formData.eventDateTime || !formData.location) {
      return;
    }

    // Update an existing event
    if (editIndex !== null) {
      const eventId = events[editIndex].id;

      fetch(`http://localhost:8080/api/events/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
          .then((response) => response.json())
          .then((updatedEvent) => {
            const updatedEvents = [...events];
            updatedEvents[editIndex] = updatedEvent;

            setEvents(updatedEvents);
            setEditIndex(null);
          });

    } else {

      //Create a new event
      fetch(`http://localhost:8080/api/events/parent/${parentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
          .then((response) => response.json())
          .then((newEvent) => {
            setEvents([...events, newEvent]);
          });
    }


  //delete events

    setFormData({
      title: "",
      eventDateTime: "",
      location: "",
      description: "",
    });
  };

  // Save to localStorage whenever events change
  // useEffect(() => {
  //   localStorage.setItem("events", JSON.stringify(events));
  // }, [events]);


  return (
    <main className="app">
      <Button text="⬅ Back" className="back-btn" onClick={() => navigate(-1)} />
      <div className="detail-box">
        <h1>Events</h1>
        <form onSubmit={handleSubmit} className="event-form">
          <input
            type="text"
            name="title"
            placeholder="Event title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="eventDateTime"
            value={formData.eventDateTime}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="location"
            placeholder="Event location"
            value={formData.location}
            onChange={handleChange}
            row={4}
          />
          <textarea
            name="description"
            placeholder="Event description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit">
            {editIndex !== null ? "update Event" : "Add Event"}
          </button>
        </form>
        <div className="events-list">
          {events.length === 0 ? (
            <p>No events added yet.</p>
          ) : (
            events.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <p>
                  <strong>Date:</strong> {event.eventDateTime}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Description:</strong> {event.description}
                </p>
                <div className="event-actions">
                  <button type="button" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Events;
