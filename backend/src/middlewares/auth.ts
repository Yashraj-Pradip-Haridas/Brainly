import jwt, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;
import { Request, Response, NextFunction } from "express";
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).json({ Message: "Unauthorized" });
    return;
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  if (typeof decoded === "object" && "id" in decoded) {
    req.userId = (decoded as JwtPayload).id as string;
    next();
  } else {
    res.status(403).json({ message: "Invalid token payload" });
    return;
  }
};
