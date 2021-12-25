const User = require("../model/user-model");

//GET ALL USERS
const getUsers = async (req, res) => {
  let user;
  try {
    user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

//GET USER BY ID
const getUserById = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

//ADD USER
const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

//UPDATE USER
const updateUser = async (req, res) => {
  const user = req.body;
  const updatedUser = new User(user);

  try {
    await User.updateOne({ _id: req.params.id }, updatedUser);
    res.status(200).json(updateUser);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

//DELETE USER
const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json("User Deleted");
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
};
