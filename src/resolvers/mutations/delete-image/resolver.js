import { Image } from "../../../models/Image.js";
import { yupSchema } from "./validate-input.js";

export const deleteImage = async (args, context, info) => {
  await yupSchema().validate(args.id);
  const model = await Image();
  const imageToBeDeleted = await model.findByPk(args.id);
  console.log(imageToBeDeleted);
  if (imageToBeDeleted === null) {
    return `The image with the id: ${args.id} doesn't exist`;
  }
  await imageToBeDeleted.destroy();
  return `The image with the id: ${args.id} has been deleted`;
};
