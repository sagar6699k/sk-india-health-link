import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

// get the all the list of users
router.get("/users", userController.getAllUsers)
router.post("/user", userController.createUser)
router.put("/user/edit/:id", userController.updateUser)
router.delete("/user/remove/:id", userController.deleteUser)


export = router