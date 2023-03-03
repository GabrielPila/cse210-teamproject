import { useState } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import {register} from '../actions/auth'
import {connect} from 'react-redux'
import "../styles/Signup.css";


const Signup = () => {
  const location = useLocation();
  const {pathname} = location;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [accountCreated, setAccountCreated] = useState(false);
  const { username, password, email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(username, password, email);
    setAccountCreated(true);
  };

  if (accountCreated) return <Navigate to="/login/" />;
  return (
    <div className="signup-page">
        <Container className="signup-page-container">
          <Navbar />
          <h3 className="signup-title">
            Welcome to Housing Safari in San Diego
          </h3>
          <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
            <div className="signup-username-div">
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <label className="label-username">Email</label>
                </Grid>
                <Grid item xs={7} className="signup-username-grid">
                  <input
                    type="text"
                    className=""
                    placeholder="Enter your email..."
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={email}
                    required
                  />
                </Grid>
              </Grid>
            </div>
            <div className="signup-username-div">
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <label className="label-username">Username</label>
              </Grid>
              <Grid item xs={7} className="signup-username-grid">
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
            <div className="signup-password-div">
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <label className="label-password">Password</label>
                </Grid>
                <Grid item xs={7} className="signup-password-grid">
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
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </form>
        </Container>
    </div>

    // <div className="Auth-form-container">
    //   <form className="Auth-form" onSubmit={(e) => onSubmit(e)}>
    //     <div className="Auth-form-content">
    //       <Navbar />
    //       <h3 className="Welcome-to-housing">
    //         Welcome to Housing Safari in San Diego
    //       </h3>

    //       <div className="form-email ">
    //         <label>Email</label>
    //         <input
    //           type="email"
    //           className="placeholder"
    //           placeholder="Enter your email..."
    //           name="email"
    //           onChange={(e) => onChange(e)}
    //           value={email}
    //           required
    //         />
    //       </div>
    //       <div className="form-user">
    //         <label>Username</label>
    //         <input
    //           type="text"
    //           className="placeholder"
    //           placeholder="Enter your user name..."
    //           name="username"
    //           onChange={(e) => onChange(e)}
    //           value={username}
    //           required
    //         />
    //       </div>
    //       <div className="form-password">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           className="placeholder"
    //           placeholder="Enter your password..."
    //           name="password"
    //           onChange={(e) => onChange(e)}
    //           value={password}
    //           required
    //           minLength="6"
    //         />
    //       </div>
    //       <button type="submit" className="login-button" >Register</button>
    //     </div>
    //   </form>
    // </div>
  )
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

export default Signup;// connect(null, {register})(Signup);
