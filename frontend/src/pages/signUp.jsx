import "../styles/Login.css";
import LoginNavbar from "../components/LoginNavbar";
// import { useNavigate } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

class Signup extends Component {

  state = {
    name: "",
    email: "",
    password: "",
  };
  
  // Submit an item
  handleSubmit = (item) => {
    item.preventDefault();
    // alert("save" + JSON.stringify(item));
    // if new post to submit
      axios
        .get("/signup/")
        .then((res) => this.props.resetState())
        .catch((err) => console.log(err));
    };

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <LoginNavbar />
            <h3 className="Welcome-to-housing">
              Welcome to Housing Safari in San Diego
            </h3>
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
            <button
              type="Login"
              className="login-button"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

