import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core";

//STYLING
const useStyles = makeStyles({
  button: {
    marginLeft: 3,
    marginRight: 3,
  },
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    },
  },
});

//ALL USER FUNCTIONAL COMPONENT
const AllUsers = () => {
  const [user, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  //CALLING GET API
  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/api");
    setUser(data);
  };

  //CALLING DELETE API
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/${id}`);
    getData();
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((userData) => (
          <TableRow key={userData._id}>
            <TableCell>{userData._id}</TableCell>
            <TableCell>{userData.name}</TableCell>
            <TableCell>{userData.email}</TableCell>
            <TableCell>{userData.phone}</TableCell>
            <TableCell>
              <Link to={`/edit/${userData._id}`}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </Link>

              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => deleteUser(userData._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
