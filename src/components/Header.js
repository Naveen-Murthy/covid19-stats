import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

function Header() {
    const handleUser = (event) => {
        console.log('Profile');
    };

    return ( 
        <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Covid 19 Statistics
          </Typography>
          <IconButton
            size="large"
            onClick={handleUser}
          >
            <Avatar alt="Naveen Murthy" src="" />
          </IconButton>
        </Toolbar>
      </AppBar>
     );
}

export default Header;