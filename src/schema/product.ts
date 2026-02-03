import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Product name is required'),
  price: z.number().positive('Price must be positive'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url('Image must be a valid URL'),
  tag: z.string().optional(),
});

export const CartItemSchema = ProductSchema.extend({
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

export type Product = z.infer<typeof ProductSchema>;
export type CartItem = z.infer<typeof CartItemSchema>;