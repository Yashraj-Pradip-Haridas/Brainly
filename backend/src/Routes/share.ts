import { Router } from "express";
import { userMiddleware } from "../middlewares/auth";
import { contentModel, linkModel, userModel } from "../db";
import { random } from "../utils";
import asyncWrap from "../wrappers/asyncWrap";
const shareRouter = Router();

shareRouter.post(
  "/share",
  userMiddleware,
  asyncWrap(async (req, res) => {
    const share = req.body.share;
    const user = await linkModel.findOne({
      userId: req.userId
    });

    if (share) {
      if (user) {
        res.json({ message: "/share/" + user.hash });
        return;
      }
      const hash = random(10);
      await linkModel.create({
        userId: req.userId,
        hash: hash
      });
      res.json({ message: "/share/" + hash });
    } else {
      await linkModel.deleteOne({
        userId: req.userId
      });
      res.json({ message: "Link removed" });
    }
    res.json({ message: "Updated share link" });
  })
);

shareRouter.get(
  "/:shareLink",
  asyncWrap(async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({ hash });
    if (!link) {
      res.status(404).json({ message: "Link not found" });
      return;
    }
    const content = await contentModel.find({ userId: link.userId });
    const user = await userModel.findOne({ _id: link.userId });
    res.json({ message: "Share endpoint", username: user?.username, content });
  })
);
export default shareRouter;
