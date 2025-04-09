import { z } from "zod";

const reqbody = z.object({
  title: z.string().min(3),
  link: z.string().min(3),
  type: z.string(),
  tags: z.array(z.string()).nonempty(),
  userId: z.string()
});
export default reqbody;
