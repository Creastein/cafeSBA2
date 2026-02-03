import { PRODUCTS } from '../constants';
import { ProductSchema } from '../schema/product';

export const useValidatedProducts = () => {
  const validatedProducts = PRODUCTS.map(product => {
    try {
      return ProductSchema.parse(product);
    } catch (error) {
      console.error('Invalid product data:', error);
      return null;
    }
  }).filter((product): product is NonNullable<typeof product> => product !== null);

  return validatedProducts;
};