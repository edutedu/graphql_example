import { createImage } from "./create-image.js";
import { updateImage } from "./update-image.js";
import { deleteImage } from "./delete-image.js";

export const mutationResolvers = {
  createImage,
  updateImage,
  deleteImage
};
