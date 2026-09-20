// Signup form to collect user and child information
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function SignupPage({ setUserName }) {
  const [name, setName] = useState("");
  // State to show confetti after signup
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(name);
    setShowConfetti(true);

    // Go to Browse page after showing confetti
    setTimeout(() => {
      navigate("/browse");
    }, 1500);
  };

  return (
    <div className="auth-page">
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

          <input type="number" placeholder="Enter your Age" required min="18" />

          <input type="text" placeholder="Enter your Location" required />

          <input
            type="tel"
            placeholder="Enter your Phone Number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

          <input type="text" placeholder="Enter your Child Name" required />

          <input
            type="number"
            placeholder="Enter your Child Age"
            required
            min="1"
            max="14"
          />

          <input type="text" placeholder="Enter your Child Hobbies" />

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
