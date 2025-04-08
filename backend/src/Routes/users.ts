import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../db";
import reqBody from "../middlewares/userValidation";
import findUser from "../middlewares/findUser";
const SecretKey = process.env.JWT_SECRET as string;
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const parsedData = reqBody.safeParse(req.body);
  if (!parsedData.success) {
    res
      .status(400)
      .json({ message: "Invalid inputs", errors: parsedData.error.format() });
    return;
  }

  try {
    // ✅ Check if user exists
    const existingUser = await findUser(username);
    if (existingUser !== null) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    // ✅ Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    // ✅ Create New User
    const newUser = await userModel.create({
      username,
      password: hashedPassword
    });
    res.status(201).json({
      message: "Signed up successfully. Please log in!"
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: errorMessage });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const parsedData = reqBody.safeParse(req.body);
  if (!parsedData.success) {
    res
      .status(400)
      .json({ message: "Invalid inputs", errors: parsedData.error.format() });
    return;
  }
  try {
    // ✅ Check if user exists
    const existingUser = await findUser(username);
    if (existingUser == null) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }
    // ✅ Generate JWT token
    const token = jwt.sign({ id: existingUser._id }, SecretKey, {
      expiresIn: "1h"
    });
    res.json({ token });
    return;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: errorMessage });
    return;
  }
});

export default userRouter;
