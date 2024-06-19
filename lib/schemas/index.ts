import {z} from "zod";

export const RegisterSchema = z.object({
  email: z
    .string({invalid_type_error: "Must be a string"})
    .email({message: "Valid email is required"}),
  password: z.string().min(6, {message: "Minimun of 6 characters required"}),
  username: z.string().min(1, {message: "name is required"}),
});
