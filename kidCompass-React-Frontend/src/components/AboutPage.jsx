import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../App.css";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <main className="app">
      <Button text="⬅ Back" className="back-btn" onClick={() => navigate(-1)} />
      <div className="detail-box">
        <h1>About KidCompass</h1>
        <p>
          KidCompass is a platform designed to help children and families
          connect with others who share similar interests, hobbies, and
          locations.
        </p>
        <p>
          Our goal is to create a safe and friendly environment where families
          can discover new friendships, explore activities, and build meaningful
          connections.
        </p>
        <h3>What you can do:</h3>
        <ul>
          <li>Browse Kids by Age and Location</li>
          <li>View detailed profiles</li>
          <li>Sent connection requests</li>
        </ul>
      </div>
    </main>
  );
}

export default AboutPage;
