import { Router } from "express";
import { userMiddleware } from "../middlewares/auth";
import { contentModel } from "../db";
const contentRouter = Router();

contentRouter.post("/", userMiddleware, async (req, res) => {
  const { title, link, type, userId, tags } = req.body;
  const content = await contentModel.create({
    title,
    link,
    type,
    userId,
    tags
  });
  res.json({ message: "New content created successfully" });
});

contentRouter.get("/", (req, res) => {
  res.json({ message: "Get content Route" });
});

contentRouter.delete("/", (req, res) => {
  res.json({ message: "Delete content Route" });
});

export default contentRouter;
