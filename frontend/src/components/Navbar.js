import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RoofingIcon from '@mui/icons-material/Roofing';
import MenuIcon from '@mui/icons-material/Menu';
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <div className='appbar-div'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <RoofingIcon className="roof-icon"/>
                210 Team 4
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logout
            </Typography>
          </div>
          <Button color="inherit"><MenuIcon /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}