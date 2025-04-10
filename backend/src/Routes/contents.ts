import { Router } from "express";
import { userMiddleware } from "../middlewares/auth";
import { contentModel } from "../db";
import reqBody from "../middlewares/contentValidation";
import asyncWrap from "../wrappers/asyncWrap";
const contentRouter = Router();

contentRouter.post(
  "/",
  userMiddleware,
  asyncWrap(async (req, res) => {
    const { title, link, type, tags } = req.body;
    const userId = req.userId;
    const parsedData = reqBody.safeParse(req.body);
    if (!parsedData.success) {
      res.status(400).json({ message: "Invalid request" });
      return;
    }
    const content = await contentModel.create({
      title,
      link,
      type,
      userId,
      tags
    });
    res.json({ message: "New content created successfully" });
  })
);

contentRouter.get(
  "/",
  userMiddleware,
  asyncWrap(async (req, res) => {
    res.json({ message: "Get content Route" });
  })
);

contentRouter.delete("/", (req, res) => {
  res.json({ message: "Delete content Route" });
});

export default contentRouter;
