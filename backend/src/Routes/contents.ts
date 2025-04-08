import { Router } from "express";
const contentRouter = Router();

contentRouter.post("/", (req, res) => {
  res.json({ message: "content Route" });
});

contentRouter.get("/", (req, res) => {
  res.json({ message: "Get content Route" });
});

contentRouter.delete("/", (req, res) => {
  res.json({ message: "Delete content Route" });
});

export default contentRouter;
