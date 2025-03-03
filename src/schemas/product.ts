import { z } from "zod";

// const AvailabilityStatusSchema = z.union([
//   z.literal("In Stock"),
//   z.literal("Low Stock"),
// ]);

export const ProductSchema = z.object({
  title: z.string(),
  price: z.number().min(0),
  description: z.string(),
  // thumbnail: z.string(),
  category: z.string(),
  // stock: z.string(),
  // tags: z.array(z.string()),
});
