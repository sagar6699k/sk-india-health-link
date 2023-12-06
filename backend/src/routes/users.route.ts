import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

// get the all the list of users
router.get("/users", userController.getAllUsers)


export = router