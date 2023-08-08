import { Image } from "../../models/Image.js";

export const updateImage = async (args, context, info) => {
  const imageToUpdate = await Image.findByPk(args.id);
  const { category, owner, url, title } = args.input;
  if (!imageToUpdate) {
    throw new Error(`Couldn't find image with id ${args.id}`);
  }
  if (category !== undefined) {
    imageToUpdate.category = category;
  }
  if (owner !== undefined) {
    imageToUpdate.owner = owner;
  }
  if (url !== undefined) {
    imageToUpdate.url = url;
  }
  if (title !== undefined) {
    imageToUpdate.title = title;
  }
  return await imageToUpdate.save();
};
