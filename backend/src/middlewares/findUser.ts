import { userModel } from "../db";
export default async function findUser(username: string) {
  const existingUser = await userModel.findOne({ username });
  if (existingUser) {
    return existingUser;
  } else {
    return null;
  }
}
