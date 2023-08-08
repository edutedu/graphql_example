import { resolver } from "../resolvers/index.js";

export const root = {
  image: resolver.Query.queryResolvers.getImageById,
  images: resolver.Query.queryResolvers.getImagesByCategory,
  createImage: resolver.Mutation.mutationResolvers.createImage,
  updateImage: resolver.Mutation.mutationResolvers.updateImage,
  deleteImage: resolver.Mutation.mutationResolvers.deleteImage
};
