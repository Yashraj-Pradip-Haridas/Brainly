import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { Schema, Types } = mongoose;
const objectId = Types.ObjectId;

// ✅ Database Connection (Using try-catch for better error handling)
const DbConnection = async () => {
  const URL = process.env.MONGO_URL;

  if (!URL) {
    throw new Error("MONGO_URL is missing in the .env file");
  }

  try {
    await mongoose.connect(URL);
    console.log("✅ Successfully connected to the database");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    process.exit(1); // Exit process on failure
  }
};

// ✅ User Schema (Moved to the top to avoid reference issues)
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const userModel = mongoose.model("User", userSchema);

// ✅ Tag Schema
const tagSchema = new Schema({
  title: { type: String, required: true, unique: true }
});
const tagModel = mongoose.model("Tag", tagSchema);

// ✅ Content Schema
const contentTypes = ["image", "video", "article", "audio"]; // Define outside schema

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: objectId, ref: "Tag" }],
  userId: { type: objectId, ref: "User", required: true }
});

// ✅ Validate user existence before saving content
contentSchema.pre("save", async function (next) {
  const user = await userModel.findById(this.userId);
  if (!user) {
    return next(new Error(" User does not exist"));
  }
  next();
});
const contentModel = mongoose.model("Content", contentSchema);

// ✅ Link Schema
const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: objectId, ref: "User", required: true }
});

// ✅ Validate user existence before saving link
linkSchema.pre("save", async function (next) {
  const user = await userModel.findById(this.userId);
  if (!user) {
    return next(new Error(" User does not exist"));
  }
  next();
});
const linkModel = mongoose.model("Link", linkSchema);

// ✅ Export everything properly
export { DbConnection, userModel, tagModel, contentModel, linkModel };
