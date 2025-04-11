import { Router } from "express";
import { userMiddleware } from "../middlewares/auth";
import { contentModel, userModel } from "../db";
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
    const userId = req.userId;
    const data = await contentModel.find({ userId: userId });
    res.json({ data });
  })
);

contentRouter.delete(
  "/",
  asyncWrap(async (req, res) => {
    const userId = req.body.userId;
    const contentId = req.params.contentId;
    // const [userUpdate, contentDelete] = await Promise.all([
    //   userModel.findByIdAndUpdate(userId, { $pull: { _id: contentId } }),
    //   contentModel.findByIdAndDelete(contentId)
    // ]);
    const update = await contentModel.findOneAndDelete({
      id: contentId,
      userId: userId
    });
    res.json({ message: "Deleted", update });
  })
);

export default contentRouter;
