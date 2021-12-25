import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import { Button } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";

//STYLING
const useStyle = makeStyles({
  container: {
    width: "50%",
    height: "100%",
    margin: "5% 0 0 25%",
    padding: 50,
  },
  input: {
    marginTop: 20,
  },
  btn: {
    marginTop: 15,
  },
  h4: {
    textAlign: "center",
    marginBottom: 5,
  },
  imageupload: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imagePreview: {
    width: "13rem",
    height: "13rem",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "1rem",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

//INITIAL VALUES
const initialValues = {
  name: "",
  email: "",
  phone: "",
};

//ADD USER FUNCTIONAL COMPONENT
const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, email, phone } = user;
  const navigate = useNavigate();
  const classes = useStyle();

  // INPUT CHANGE HANDLER
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //CALLING POST API
  const addUserDetails = async (user) => {
    await axios.post("http://localhost:5000/api/add-user", user);
    navigate("/all-users");
  };

  return (
    <FormGroup className={classes.container} encType="multipart/form-data">
      <Typography className={classes.h4} variant="h4">
        Add User
      </Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          className={classes.input}
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          className={classes.input}
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          className={classes.input}
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
        />
      </FormControl>
      <Button
        onClick={() => addUserDetails(user)}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
