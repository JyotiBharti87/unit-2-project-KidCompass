import { useState } from "react";
import "../App.css";

export default function FeedbackForm({ open, setOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
    setOpen(false); //form will close after submiit
  };
  if (!open) {
    return null;
  }
  return (
    <div className="feedback-modal">
      <div className="card">
        <button
          type="button"
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          ✖
        </button>
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Feedback:
            <textarea
              maxLength="200"
              name="feedback"
              placeholder="Please enter your feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows={5}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="preview-feedback">
          <h2>Preview:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Feedback: {formData.feedback}</p>
        </div>
      </div>
    </div>
  );
}
