import { Image } from "../models/Image.js";

export const queryResolvers = {
  getImageById: async (args, context, info) => {
    const image = await Image.findByPk(args.id);
    if (!image) {
      throw new Error(`Couldn't find author with id ${args.id}`);
    }
    return image;
  },
  getImagesByCategory: async (args, context, info) => {
    return await Image.findAll({
      where: {
        category: args.category
      }
    });
  }
};
