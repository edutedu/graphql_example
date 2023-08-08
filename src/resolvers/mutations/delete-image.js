import { Image } from "../../models/Image.js";

export const deleteImage = async (args, context, info) => {
  const imageToBeDeleted = await Image.findByPk(args.id);
  if (imageToBeDeleted === undefined) {
    return `The image with the id: ${args.id} doesn't exist`;
  }
  await imageToBeDeleted.destroy();
  return `The image with the id: ${args.id} has been deleted`;
};
