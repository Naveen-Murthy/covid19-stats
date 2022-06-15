import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

function Header() {
  let history = useNavigate();
  const homeNavigation = () => {
    history(`/home`);
  };

  const header__color = {
    backgroundColor: '#aa4b6b',
    backgroundImage: 'linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)'
  }
  
  return (
    <AppBar position="fixed" style={header__color}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          onClick={homeNavigation}
          sx={{ flexGrow: 1 }}
        >
          <Typography component="span" sx={{ cursor: 'pointer' }}>
            Covid 19
          </Typography>
        </Typography>
        <IconButton size="large">
          <Link to={"/developer"}>
            <Avatar alt="Naveen Murthy" src="/assets/profile.png" />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
