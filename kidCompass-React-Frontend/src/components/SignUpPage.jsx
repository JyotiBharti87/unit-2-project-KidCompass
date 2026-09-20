// Signup form to collect user and child information
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function SignupPage({ setUserName }) {
  const [name, setName] = useState("");

  // Information that will be saved to the database
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [kidName, setKidName] = useState("");
  const [kidAge, setKidAge] = useState("");
  const[kidGender, setKidGender] = useState("");
  const [kidBio, setKidBio] = useState("");

  // State for error message
  const [message, setMessage] = useState("");

  // State to show confetti after signup
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  // Handle signup form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new parent and kid profile
    const newParent = {
      name: name,
      city: location,
      zipCode: zipCode,
      kidName: kidName,
      kidAge: Number(kidAge),
      kidGender: kidGender,
      kidBio: kidBio,
    };

    // Save the profile to the backend
    fetch("http://localhost:8080/api/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newParent),
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
        .then(() => {
          setUserName(name);
          setShowConfetti(true);

          // Go to Browse page
          setTimeout(() => {
            navigate("/browse");
          }, 1500);
        })
        .catch(() => {
          setMessage("Unable to create profile. Please try again.");
        });
  };

  return (
    <div className="auth-page">
      {showConfetti && (
          <div className="confetti-container">
            <span>🎉</span>
            <span>⭐</span>
            <span>🎊</span>
            <span>✨</span>
            <span>🎉</span>
            <span>⭐</span>
            <span>🎊</span>
            <span>✨</span>
          </div>
      )}
      <div className="signup-card">
        <h2 className="signup-title">Please Fill Out Your Information</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input type="number"
                 placeholder="Enter your Age"
                 required min="18"
          />

          <input type="text"
                 placeholder="Enter your Location"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 required
          />
          <input
              type="text"
              placeholder="Enter your Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
          />

          <input
            type="tel"
            placeholder="Enter your Phone Number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

          <input type="text"
                 placeholder="Enter your Child Name"
                 value={kidName}
                 onChange={(e) => setKidName(e.target.value)}
                 required />

          <input
            type="number"
            placeholder="Enter your Child Age"
            value={kidAge}
            onChange={(e) => setKidAge(e.target.value)}
            required
            min="1"
            max="14"
          />

          <input type="text"
                 placeholder="Enter your Child Gender"
                 value={kidGender}
                 onChange={(e) => setKidGender(e.target.value)}/>

          <input type="text"
                 placeholder="Enter your Child Hobbies"
                 value={kidBio}
                 onChange={(e) => setKidBio(e.target.value)}/>

          <textarea placeholder="Optional Notes"></textarea>

          <div className="login-actions">
            <button type="submit">
              Sign Up
            </button>
            <Link to="/" className="login-btn">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
