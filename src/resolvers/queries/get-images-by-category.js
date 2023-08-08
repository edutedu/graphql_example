import { Image } from "../../models/Image.js";

export const getImagesByCategory = async (args, context, info) => {
  return await Image.findAll({
    where: {
      category: args.category
    }
  });
};
