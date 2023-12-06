import { Request, Response } from "express";
import { User } from "../entities/User";
import { dbCreateConnection } from "../orm/db/dbCreateConnection";

//getting all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const userRepo = dbCreateConnection.getRepository(User);
    const allUsers = await userRepo.find();

    return res.status(200).json({
      message: "Getting all Users is successful",
      Users: allUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Getting all Users is failed",
      Error: error,
    });
  }
};

//creating user
const createUser = async (req: Request, res: Response) => {
  try {
    const userRepo = dbCreateConnection.getRepository(User);

    const userInfo = req.body;
    const user = await userRepo.save(userInfo);

    return res.status(200).json({
      message: "Creating User is successful",
      user: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Creating User is failed",
      Error: error,
    });
  }
};

//updating user
const updateUser = async (req: Request, res: Response) => {
  try {
    const userRepo = dbCreateConnection.getRepository(User);
    // get the id from req.param
    const { id } = req.params;

    // const userToUpdate = await userRepo.findOneBy({
    //   id: 1,
    // });
    const userToUpdate = await userRepo.update(id, req.body);
    

    return res.status(200).json({
      message: "User is successfully edited",
      user: userToUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

export default { getAllUsers, createUser, updateUser };
