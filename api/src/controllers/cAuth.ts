//types
import { Request, Response } from "express";
//models
import User from "../models/User/User";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
};
