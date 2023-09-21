import { createImage } from "./create-image/resolver.js";
import { updateImage } from "./update-image/resolver.js";
import { deleteImage } from "./delete-image/resolver.js";
import { createOwner } from "./create-owner/resolver.js";
import { deleteOwner } from "./delete-owner/resolver.js";

export const mutationResolvers = {
  createImage,
  updateImage,
  deleteImage,
  createOwner,
  deleteOwner
};
