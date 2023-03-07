import {useState, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoofingIcon from '@mui/icons-material/Roofing';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../context/AppContext';
import "../styles/Navbar.css"

export default function Navbar() {
  const {token, setUsername, setToken} = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location;
  const tokenInLocalStorage = (token === "") ? false: true;
  const [isLoggedIn, setIsLoggedin] = useState(tokenInLocalStorage);
 
  const logout = () => {
    localStorage.setItem("username", "")
    localStorage.setItem("token", "")
    setToken("")
    setUsername("")
    setIsLoggedin(false)
    navigate('/login');
  }

  const navigateToLogIn = () => {
    navigate('/login');
  };

  const navigateToRegister = () => {
    navigate('/signup');
  };

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <div className='appbar-div'>
            <Typography className="navbar-text" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToSearch}>
                <RoofingIcon className="roof-icon" />
                210 Team 4
            </Typography>
            {pathname === "/login" && (<Typography className="navbar-text" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToRegister}>
                Register
            </Typography>)}
            {(pathname !== "/login" && pathname !== "/signup" && isLoggedIn) && (
              <Typography className="navbar-text" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={logout}>
                Logout
              </Typography>
            )}
            {(pathname !== "/login" && pathname !== "/signup" && !isLoggedIn) && (
              <Typography className="navbar-text" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToLogIn}>
                Login
              </Typography>
            )}
            {(pathname === "/signup" && !isLoggedIn) && (
              <Typography className="navbar-text" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToLogIn}>
                Login
              </Typography>
            )}
          </div>
          <Button color="inherit"><MenuIcon /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}