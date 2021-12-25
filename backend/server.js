const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./route/user-route");

app.use(express.json());

//CORS
app.use(cors());

//ROUTING MIDDLEWARE
app.use("/api", userRoute);

const url =
  "mongodb+srv://Siddhesh:siddhesh94@cluster0.ipajf.mongodb.net/mern-crud-app?retryWrites=true&w=majority";

//DATABASE CONNECTION
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("error:", err.message);
  });
