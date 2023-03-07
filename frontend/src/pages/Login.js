import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [accountAuthenticated, setAuthenticated] = useState(false);
  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // login 
    const token = localStorage.getItem("token") || "";
    const body = JSON.stringify({ username, password });
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };

    axios.post("http://localhost:8000/login/", body, config)
    .then((res) => {
      console.log("res", res);
      if (res.data.error) {
        // send some alert: "mismatch username or password"
        console.log("error", res.data.error);
      } else{
        setAuthenticated(true);
        localStorage.setItem("token", res.data.token)
      }
    })
    .catch((error) => {
      if (error.response) {
        // send some alert: "mismatch username or password"
        console.log("error.response.status", error.response.status);
        console.log(error.response.headers);
      }
    });

    // const result = login(username, password);
    // console.log("result", result)
    // if (result) {
    //   setAuthenticated(true);
    // }
    // else{
    //   // send some alert: "mismatch username or password"
    // }
  };
  if (accountAuthenticated) {
    return <Navigate to="/search/" />;
  } 

  return (
    <div className="login-page">
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
                  name="username"
                  onChange={(e) => onChange(e)}
                  value={username}
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
                    onChange={(e) => onChange(e)}
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
    </div>
  );
};

// function Signup() {
//   const navigate = useNavigate();

//   const navigateToSearch = () => {
//     navigate('/search');
//   };

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <LoginNavbar />
//           <h3 className="Welcome-to-housing">Welcome to Housing Safari in San Diego</h3>
//           <div className="form-email">
//             <label>Email</label>
//             <input
//               type="email"
//               className="placeholder"
//               placeholder="Enter your user name..."
//             />
//           </div>
//           <div className="form-password">
//             <label>Password</label>
//             <input
//               type="password"
//               className="placeholder"
//               placeholder="Enter password..."
//             />
//           </div>
//           <button type="Login" className="login-button" onClick={navigateToSearch}>
//             <a >Sign Up</a>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function Login() {
//   const navigate = useNavigate();

//   const navigateToSearch = () => {
//     navigate('/search');
//   };

//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <LoginNavbar />
//           <h3 className="Welcome-to-housing">Welcome to Housing Safari in San Diego</h3>
//           <div className="form-email">
//             <label>Email</label>
//             <input
//               type="email"
//               className="placeholder"
//               placeholder="Enter your user name..."
//             />
//           </div>
//           <div className="form-password">
//             <label>Password</label>
//             <input
//               type="password"
//               className="placeholder"
//               placeholder="Enter password..."
//             />
//           </div>
//           <button type="Login" className="login-button" onClick={navigateToSearch}>
//             <a >Log In</a>
//           </button>
//           <p className="forgot-password">
//             {/* <a href="#">Forgot your password?</a> */}
//             {/* <a >Forgot your password?</a> */}
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

export default Login;
