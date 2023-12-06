import { Request, Response } from "express";
import { User } from "../entities/User";
import { dbCreateConnection } from "../orm/db/dbCreateConnection";

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

export default { getAllUsers };
