const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

//ROUTES
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/add-user", userController.addUser);

module.exports = router;
