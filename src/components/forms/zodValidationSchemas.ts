import { z } from "zod";
export const validationSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty("name is required")
    .max(20, { message: "Name should not exceed 20 characters" })
    .regex(/^[a-zA-Z_ ]+$/, { message: "No numbers are allowed" })
    .min(3, { message: "name should be at least 5 characters" }),
  number: z.coerce.number().int(),
  email: z
    .string()
    .trim()
    .nonempty("email is required")
    .email({ message: "please enter a valid email" }),
  car: z
    .string()
    .trim()
    .min(5, { message: 'please enter car"s details' })
    .optional(),
});


export type ValidationTypes = z.infer<typeof validationSchema>;

