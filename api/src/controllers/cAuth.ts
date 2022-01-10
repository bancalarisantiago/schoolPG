//types
import { Request, Response } from "express";
//models
import User from "../models/User/User";
//from modules
import jwt from "jsonwebtoken";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) return res.send("Email or password is wrong");

  const correctPassword: boolean = await user.validatePassword(password);

  if (!correctPassword) return res.send("Invalid Password");
  const token: string = jwt.sign(
    { _id: user._id },
    "token de minima seguridad",
    {
      expiresIn: 60 * 60,
    }
  );
  res.setHeader("auth-token", token).json(user);
};
