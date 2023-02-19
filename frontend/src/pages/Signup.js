import "../styles/Login.css";
import LoginNavbar from "../components/LoginNavbar";
import {useNavigate} from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <LoginNavbar />
          <h3 className="Welcome-to-housing">Welcome to Housing Safari in San Diego</h3>
          <div className="form-email">
            <label>Email</label>
            <input
              type="email"
              className="placeholder"
              placeholder="Enter your user name..."
            />
          </div>
          <div className="form-password">
            <label>Password</label>
            <input
              type="password"
              className="placeholder"
              placeholder="Enter password..."
            />
          </div>
          <button type="Login" className="login-button" onClick={navigateToSearch}>
            <a >Sign Up</a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;