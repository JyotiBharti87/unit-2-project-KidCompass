import { Link } from "react-router-dom";
import Button from "./Button";
import "../App.css";

function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="bg-bubble bubble-one"></div>
      <div className="bg-bubble bubble-two"></div>
      <div className="bg-bubble bubble-three"></div>

      <div className="kids-row">
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lucy"
          alt="Happy kid avatar"
          className="kid kid-left"
        />

        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Maya"
          alt="Happy kid avatar"
          className="kid kid-right"
        />
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Leo"
          alt="Happy kid avatar"
          className="kid kid-bottom-left"
        />
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Zara"
          alt="Happy kid avatar"
          className="kid kid-bottom-right"
        />
      </div>

      <section className="welcome-content">
        <div className="moon-banner">
          <span className="banner-pill">Play • Connect • Explore</span>
          <h1>Welcome to </h1>
          <h1>Kid-Compass!</h1>
          <p>Find friends, families, and fun nearby.</p>

          <div className="welcome-buttons">
            <Link to="/login">
              <Button text="Sign In" className="login-btn" />
            </Link>

            <Link to="/signup">
              <Button text="Sign Up" className="create-btn" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WelcomePage;
