import { Image } from "../models/Image.js";

export const mutationResolvers = {
  createImage: async (args, context, info) => {
    const { title, owner, category, url } = args.input;
    return await Image.create({
      title,
      owner,
      category,
      url
    });
  },
  updateImage: async (args, context, info) => {
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
  },
  deleteImage: async (args, context, info) => {
    const imageToBeDeleted = await Image.findByPk(args.id);
    if (imageToBeDeleted === undefined) {
      return `The image with the id: ${args.id} doesn't exist`;
    }
    await imageToBeDeleted.destroy();
    return `The image with the id: ${args.id} has been deleted`;
  }
};
