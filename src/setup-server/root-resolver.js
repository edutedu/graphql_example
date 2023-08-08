import { resolvers } from "./resolvers.js";

export const root = {
  image: resolvers.Query.getImageById,
  images: resolvers.Query.getImagesByCategory,
  createImage: resolvers.Mutation.createImage,
  updateImage: resolvers.Mutation.updateImage,
  deleteImage: resolvers.Mutation.deleteImage
};
