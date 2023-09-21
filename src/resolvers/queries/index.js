import { getImagesByCategory } from "./get-images-by-category/resolver.js";
import { getImageById } from "./get-image-by-id/resolver.js";

export const queryResolvers = {
  getImageById,
  getImagesByCategory
};
