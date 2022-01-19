//types
import { Request, Response } from "express";
//models
import User from "../models/User/User";
//from modules
import jwt from "jsonwebtoken";

//helpers
const generateAccessToken = (id: any) => {
  return jwt.sign({ _id: id }, "token de minima seguridad", {
    expiresIn: 60 * 60,
  });
};

const generateRefreshToken = (id: string) => {
  return jwt.sign({ _id: id }, "token de minima seguridad para refrescado");
};

//refresh token tracking
let refreshTokens: string[] = [];
//after logout, array will be trashed

export const login = async (req: Request, res: Response) => {
  const { userInfo, password } = req.body;

  const user = await User.findOne({
    $or: [{ username: userInfo }, { email: userInfo }],
  });

  if (!user) return res.send("Email, Username or password is wrong");

  const correctPassword: boolean = await user.validatePassword(password);

  if (!correctPassword) return res.send("Invalid Password");

  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);
  refreshTokens.push(refreshToken);

  res
    .setHeader("auth-token", accessToken)
    .json({ user, accessToken, refreshToken });
};

export const tokenRefresh = (req: Request, res: Response) => {
  //take token from the user
  const refreshToken = req.body.token;
  //invalid case
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(401).json("You refresh token is invalid!");
  }
  //valid case
  jwt.verify(
    refreshToken,
    "token de minima seguridad para refrescado",
    (err: any, user: any) => {
      err && console.log(err);
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newAccessToken = generateAccessToken(user._id);
      const newRefreshToken = generateRefreshToken(user._id);

      refreshTokens.push(newRefreshToken);

      res
        .status(200)
        .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    }
  );
};

export const logout = (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully");
};
