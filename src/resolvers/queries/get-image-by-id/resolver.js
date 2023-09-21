import { Image } from "../../../models/Image.js";
import { yupSchema } from "./validate-input.js";

export const getImageById = async (args, context, info) => {
  await yupSchema().validate(args.id);
  const model = await Image();
  const image = await model.findByPk(args.id);
  if (!image) {
    throw new Error(`Couldn't find image with id ${args.id}`);
  }
  return image;
};
