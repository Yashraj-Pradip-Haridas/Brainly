import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;
import { Request, Response, NextFunction } from "express";
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;
  if (!token) {
    res.status(403).json({ Message: "Unauthorized" });
    return;
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded) {
    console.log(decoded);
    // req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({ message: "You are not logged in" });
  }
};
