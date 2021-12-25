import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: 50,
    backgroundColor: "lightgrey",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1>MERN CRUD APPLICATION</h1>
    </div>
  );
};

export default Home;
