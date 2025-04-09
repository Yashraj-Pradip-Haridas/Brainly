import { Request, Response, NextFunction } from "express";

export default function (fn: (req: Request, res: Response) => Promise<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res);
    } catch (error) {
      console.error(error);
      next(error); // Pass error to Express error handler
    }
  };
}
