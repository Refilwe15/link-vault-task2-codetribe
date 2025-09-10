import Logo from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !username || !password) {
      alert("Please fill in all fields");
      return;
    }

    const user = { email, username, password };
    localStorage.setItem("user", JSON.stringify(user)); // save to localStorage
    alert("Account created successfully!");

    navigate("/ViewLinks"); // redirect after signup
  };

  return (
    <div className="container">
      <div className="left">
        <img src={Logo} alt="Profile" />
      </div>
      <div className="right">
        <div className="head">Create account</div>
        <div className="boxs">
          {/* Email */}
          <div className="box">
            <label className="labels">EMAIL :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                className="inputs icon2"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Username */}
          <div className="box">
            <label className="labels">USERNAME :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                className="inputs icon2"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="box">
            <label className="labels">PASSWORD :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                className="inputs icon2"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Signup Button */}
          <div className="login-btn">
            <button onClick={handleSignup}>Sign Up</button>
          </div>

          {/* Google button (placeholder) */}
          <div className="google">
            <Link to="/ViewLinks" className="google-link">
              <button className="google-button">
                <FontAwesomeIcon icon={faGoogle} className="gl" /> Sign in with
                Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
