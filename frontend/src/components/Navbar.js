import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoofingIcon from '@mui/icons-material/Roofing';
import MenuIcon from '@mui/icons-material/Menu';
import {useLocation, useNavigate} from 'react-router-dom';
import "../styles/Navbar.css"

export default function Navbar() {
  const location = useLocation();
  const {pathname} = location;
  const token = localStorage.getItem("token")
  const tokenInLocalStorage = (token === "") ? false: true;
  const [isLoggedIn, setIsLoggedin] = useState(tokenInLocalStorage);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "")
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