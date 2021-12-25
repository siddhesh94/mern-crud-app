import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FormGroup, FormControl, InputLabel, Input } from "@mui/material";
import { Button } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";

//STYLING
const useStyle = makeStyles({
  container: {
    width: "50%",
    height: "60%",
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
});

//INITIAL VALUES
const initialValues = {
  name: "",
  email: "",
  phone: "",
};

//EDIT USER FUNCTIONAL COMPONENT
const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, email, phone } = user;
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyle();

  //CALLING GET USER BY ID API
  useEffect(() => {
    const getData = async (id) => {
      const { data } = await axios.get(`http://localhost:5000/api/${id}`);
      setUser(data);
    };
    getData(id);
  }, [id]);

  //INPUT CHANGE HANDLER
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //CALLING PUT API
  const updateUserDetails = async (id, user) => {
    await axios.put(`http://localhost:5000/api/${id}`, user);
    navigate("/all-users");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography className={classes.h4} variant="h4">
        Update User
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
        onClick={() => updateUserDetails(id, user)}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        Update User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
