import dotenv from "dotenv";
dotenv.config();
import express from "express";
import shareRouter from "./Routes/share";
import contentRouter from "./Routes/contents";
import userRouter from "./Routes/users";
import { DbConnection } from "./db";
import errorHandler from "./middlewares/errorHandler";
import notFoundHandler from "./middlewares/notFoundHandler";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

DbConnection();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", shareRouter);

//Catches unmatched routes
app.use(notFoundHandler);

//Global error handler
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
