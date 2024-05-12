import { z } from "zod";

// name: "Tecno",
//         storage: 32,
//         battery: 2000,
//         max_price: 50000,
//         min_price: null,
//         rating_score: "top",

export const formSchema = z.object({
  name: z.optional(
    z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
  ),
  max_price: z
    .string()
    .min(0, { message: "Number must be non-negative" })
    .max(99999, { message: "Number length cannot exceed 5 digits" }),
  storage: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  bettery: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  rating_score: z.optional(z.boolean()),
});
