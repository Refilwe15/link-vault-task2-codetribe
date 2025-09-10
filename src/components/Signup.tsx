import Logo from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

interface Props {
  placeholder: string;
  input: string;
}

const Signup: React.FC<Props> = ({ placeholder, input }) => {
  return (
    <div className="container">
      <div className="left">
        <img src={Logo} alt="Profile" />
      </div>
      <div className="right">
        <div className="head">Create account</div>
        <div className="boxs">
          {/* password input */}
          <div className="box">
            <label className="labels">EMAIL :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                className="inputs icon2"
                type="email"
                placeholder="Enter email"
              />
            </div>
          </div>

          {/* username input */}
          <div>
          <div className="box">
            <label className="labels">USERNAME :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                className="inputs icon2"
                type="text"
                placeholder={(placeholder = "Enter username")}
                value={input}
              />
            </div>
          </div>
          {/* password input */}
          <div className="box">
            <label className="labels">PASSWORD :</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                className="inputs icon2"
                type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        </div>

        {/* login button */}
<div className='google'>
  <Link to="/ViewLinks" className='google-link'>
    <button className='google-button'>
      <FontAwesomeIcon icon={faGoogle} className='gl' /> Sign in with Google
    </button>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
};
export default Signup;
