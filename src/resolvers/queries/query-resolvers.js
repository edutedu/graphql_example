import { getImagesByCategory } from "./get-images-by-category.js";
import { getImageById } from "./get-image-by-id.js";

export const queryResolvers = {
  getImageById,
  getImagesByCategory
};
