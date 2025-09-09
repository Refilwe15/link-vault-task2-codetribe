import linkImg from '../assets/link.png';
import icon from '../assets/profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; 

interface Props {
    label: string,
    placeholder: string
}

const Form: React.FC<Props> = ({ label, placeholder }) => {
    return (
        <>
            <div className="container">

                {/* left side */}
                <div className="left">
                    <h1></h1>
                    <img src={linkImg} alt="Link" />
                </div>

                {/* right side */}
                <div className="right">
                    <header>
                        <p>Welcome to</p>
                        <h1>JOJO's Link</h1>
                        <img src={icon} alt="Link" className='icon' />
                    </header>

                    <div className="boxs">

                        {/* username input */}
                        <div className='box'>
                            <label className='labels'>USERNAME :</label>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faUser} className="input-icon" />
                                <input
                                    className='inputs icon2'
                                    type="text"
                                    placeholder={placeholder="Enter username"}
                                />
                            </div>
                        </div>

                        {/* password input */}
                        <div className='box'>
                            <label className='labels'>PASSWORD :</label>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faLock} className="input-icon" />
                                <input
                                    className='inputs icon2'
                                    type='password'
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" ></input> <p>Do you remember me ?</p>
                            </div>
                        </div>

                        {/* login button */}
                        <div className='login-btn'>
                            <button>Login</button>
                        </div>

                        {/* Google sign in */}
                        <div className='google'>
                            <button>
                                <FontAwesomeIcon icon={faGoogle} className='gl' /> Sign in with Google
                            </button>
                        </div>

                        {/* Link for creating account */}
                        <div className='create-link'>
                            <p>Don't have account ? click <a href='../components/Login.tsx'>here</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
