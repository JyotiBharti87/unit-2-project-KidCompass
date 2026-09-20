import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function LoginPage({ setUserName }) {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  //handle input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!loginData.userName || !loginData.password) {
      setMessage("Please enter userName and password");
      return;
    }
    //clear error message
    setMessage("");

    setUserName(loginData.userName);
    navigate("/browse");
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Enter userName"
            value={loginData.userName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <div className="login-actions">
            <button type="submit">Sign In</button>

            <Link to="/signup" className="create-btn">
              Create an account
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;
