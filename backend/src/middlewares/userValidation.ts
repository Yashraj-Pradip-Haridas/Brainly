import { z } from "zod";

const reqBody = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(10, "Username cannot exceed 10 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot exceed 20 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
});

export default reqBody;
