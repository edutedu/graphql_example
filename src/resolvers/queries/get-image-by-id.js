import { Image } from "../../models/Image.js";

export const getImageById = async (args, context, info) => {
  const image = await Image.findByPk(args.id);
  if (!image) {
    throw new Error(`Couldn't find author with id ${args.id}`);
  }
  return image;
};
