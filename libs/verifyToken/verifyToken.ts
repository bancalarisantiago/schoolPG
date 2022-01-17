//from modules
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

//interface
import { IPayload } from "./IPayload";

export const tokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json("Acces Denied");

  const payload = jwt.verify(token, "token de minima seguridad") as IPayload;

  req.userId = payload._id;
  next();
};
