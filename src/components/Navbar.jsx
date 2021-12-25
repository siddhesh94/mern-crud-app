import React from "react";
import { AppBar, Box, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  tabs: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    marginRight: 20,
    fontSize: 20,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" className={classes.tabs}>
            CRUD APP
          </NavLink>
          <NavLink to="/all-users" className={classes.tabs}>
            All Users
          </NavLink>
          <NavLink to="/add-user" className={classes.tabs}>
            Add User
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
