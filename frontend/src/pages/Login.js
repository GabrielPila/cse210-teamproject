import { useState, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const {username, token, setUsername, setToken} = useContext(AppContext);
  const [formData, setFormData] = useState({
    formUsername: "",
    password: "",
  });
  
  const { formUsername, password } = formData;
  const onChange = (e) => {
    const newFormData = {
      ...formData, 
      [e.target.name]: e.target.value
    }
    setFormData(newFormData);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // login 
    const body = JSON.stringify({ username:formUsername, password });
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    axios.post("http://localhost:8000/login/", body, config)
    .then((res) => {
      if (res.data.error) {
        // send some alert: "mismatch username or password"
        console.log("error", res.data.error);
        alert('User not found, please register first! ')
        
      } else{
        setUsername(formData.formUsername)
        setToken(res.data.token)
        localStorage.setItem("username", formData.formUsername)
        localStorage.setItem("token", res.data.token)
        navigate("/")
      }
    })
    .catch((error) => {
      if (error.response) {
        // send some alert: "mismatch username or password"
        console.log("error.response.status", error.response.status);
        console.log(error.response.headers);
      }
    });


  };

  return (
    <>
    {(username === "" || username === undefined || token === undefined || token === "") ? <div className="login-page">
        <Container className="login-page-container">
          <Navbar />
          <h3 className="login-title">
            Welcome to Housing Safari in San Diego
          </h3>
          <form className="login-form" onSubmit={(e) => onSubmit(e)}>
            <div className="login-username-div">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <label className="label-username">Username</label>
              </Grid>
              <Grid item xs={7} className="login-username-grid">
                <input
                  type="text"
                  className=""
                  placeholder="Enter your username..."
                  name="formUsername"
                  onChange={onChange}
                  value={formUsername}
                  required
                />
              </Grid>
            </Grid>
            </div>
            <div className="login-password-div">
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <label className="label-password">Password</label>
                </Grid>
                <Grid item xs={7} className="login-password-grid">
                  <input
                    type="password"
                    className=""
                    placeholder="Enter your password..."
                    name="password"
                    onChange={onChange}
                    value={password}
                    required
                    minLength="6"
                  />
                </Grid>
              </Grid>
            </div>
            <button type="Login submit" className="login-button">
              Login
            </button>
          </form>
        </Container>
    </div> : (<Navigate to="/" replace={true}/>)}
    </>
  )
};


export default Login;
