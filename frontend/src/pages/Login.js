import "../styles/Login.css";
import LoginNavbar from "../components/LoginNavbar"

function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          {/* <div className="top-bar">
            <div className="form-210team4">
              <label>210 Team4</label>
            </div>
            <div className="form-home">
              <label>Home</label>
            </div>
            
          </div> */}
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
          <button type="Login" className="login-button">
            <a >Log In</a>
          </button>
          <p className="forgot-password">
            {/* <a href="#">Forgot your password?</a> */}
            <a >Forgot your password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;