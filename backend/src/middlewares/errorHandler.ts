import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if not set
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined // Show stack only in dev
  });
};

export default errorHandler;
