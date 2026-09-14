import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../App.css";

function Events() {
  const navigate = useNavigate();


  //state to store events from backend
  const[events, setEvents] = useState ([]);

  // Store parents so the user can select who is creating the event
  const [parents, setParents] = useState([]);

  //Store the index of the event being edited
  const [editIndex, setEditIndex] = useState(null);

  //store the selected parent id
  const [parentId, setParentId] = useState("");

  //show error message to the user
  const[message, setMessage] = useState("");

  //store value/data from the form
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
        }).catch(() => { setMessage("Unable to load Events");
        });
  }, []);

  // Get parents from Spring Boot when the page loads
  useEffect(() => {
    fetch("http://localhost:8080/api/parents")
        .then((response) => response.json())
        .then((data) => {
          setParents(data);
        })
        .catch(() => {
          setMessage("Unable to load parent profiles.");
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

    // form validation: check if required fields are filled
    if (!formData.title || !formData.eventDateTime || !formData.location) {
      setMessage("Please fill in all required fields.");
      return;
    }

    // A parent must be selected to create an event.
    if (editIndex === null && !parentId) {
      setMessage("Please select a parent.");
      return;
    }
    setMessage(""); // Clear any previous messages

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
            setMessage("Event updated successfully.");

            clearForm();
          })
          .catch(() => {
            setMessage("Unable to update the event.");
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
            setMessage("Event added successfully.");
            clearForm();
          })
          .catch(() => {
            setMessage("Unable to add the event.");
          });
    }
  };


  // Put selected event information into the form
  const handleEdit = (index) => {
    const event = events[index];

    setFormData({
      title: event.title,
      eventDateTime: event.eventDateTime,
      location: event.location,
      description: event.description || "",
    });

    if (event.parent) {
      setParentId(event.parent.id);
    }

    setEditIndex(index);
    setMessage("");
  };

  // Delete an event from the database
  const handleDelete = (index) => {
    const eventId = events[index].id;

    fetch(`http://localhost:8080/api/events/${eventId}`, {
      method: "DELETE",
    })
        .then(() => {
          const filteredEvents = events.filter(
              (event) => event.id !== eventId
          );

          setEvents(filteredEvents);
          setMessage("Event deleted successfully.");

          // Clear form if the event being edited was deleted
          if (editIndex === index) {
            setEditIndex(null);
            clearForm();
          }
        })
        .catch(() => {
          setMessage("Unable to delete event.");
        });
  };

  // Clear the event form
  const clearForm = () => {
    setFormData({
      title: "",
      eventDateTime: "",
      location: "",
      description: "",
    });

    setParentId("");
  };


  return (
    <main className="app">
      <Button text="⬅ Back" className="back-btn" onClick={() => navigate(-1)} />

      <div className="detail-box">
        <h1>Events</h1>
        {/*Show Feedback to the user*/}
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit} className="event-form">

          {/* Select the parent creating the event */}
          <select
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            disabled={editIndex !== null} // Disable selection when editing
          >
            <option value="">Select Parent</option>
            {parents.map((parent) => (
              <option key={parent.id} value={parent.id}>
                {parent.name}
              </option>
            ))}
          </select>

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
            name="location"
            placeholder="Event location"
            value={formData.location}
            onChange={handleChange}
            row={3}
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
