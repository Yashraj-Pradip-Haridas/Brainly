import { Router } from "express";
const shareRouter = Router();

shareRouter.get("/share", (req, res) => {
  res.json({ message: "Share endpoint" });
});

shareRouter.get("/:shareLink", (req, res) => {
  res.json({ message: "Share endpoint" });
});
export default shareRouter;
