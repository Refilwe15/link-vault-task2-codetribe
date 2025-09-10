import linkImg from "../assets/link.png";
import icon from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
}

const Form: React.FC<Props> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.username === username && user.password === password) {
      alert("Login successful!");
      navigate("/ViewLinks");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      {/* left side */}
      <div className="left">
        <img src={linkImg} alt="Link" />
      </div>

      {/* right side */}
      <div className="right">
        <header>
          <p>Welcome to</p>
          <h1>JOJO's Link</h1>
          <img src={icon} alt="Link" className="icon" />
        </header>

        <div className="boxs">
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

          {/* Login Button */}
          <div className="login-btn">
            <button onClick={handleLogin}>Login</button>
          </div>

          {/* Google sign in (placeholder) */}
          <div className="google">
            <Link to="/ViewLinks" className="google-link">
              <button className="google-button">
                <FontAwesomeIcon icon={faGoogle} className="gl" /> Sign in with
                Google
              </button>
            </Link>
          </div>

          {/* Link to signup */}
          <div className="create-link">
            <p>
              Don't have account? click <Link to="/Signup">here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
