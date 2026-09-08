import { useState, useEffect } from "react";
import eventsData from "../EventsData.json";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../App.css";

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : eventsData;
  });

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    address: "",
    description: "",
  });

  //handle changes from input

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Update event

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.address) {
      return;
    }

    if (editIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = formData;
      setEvents(updatedEvents);
      setEditIndex(null);
    } else {
      setEvents([...events, formData]);
    }
    setFormData({
      title: "",
      date: "",
      address: "",
      description: "",
    });
  };
  //edit event
  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditIndex(index);
  };
  //delete events
  const handleDelete = (index) => {
    const filteredEvents = events.filter((_, i) => i !== index);
    setEvents(filteredEvents);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({
        title: "",
        date: "",
        address: "",
        description: ",",
      });
    }
  };
  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
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
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="address"
            placeholder="Event address"
            value={formData.address}
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
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Address:</strong> {event.address}
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
