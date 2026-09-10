import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function LoginPage({ setUserName }) {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
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
      alert("Please enter userName and password");
      return;
    }
    setUserName(loginData.userName);
    navigate("/browse");
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
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
          <button type="submit">Sign In</button>
        </form>
        <div className="back-link">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
