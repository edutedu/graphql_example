import { Image } from "../../../models/Image.js";
import { yupSchema } from "./validate-input.js";

export const updateImage = async (args, context, info) => {
  await yupSchema().validate(args.input);
  const { id, category, owner, url, title } = args.input;
  const model = await Image();
  const imageToUpdate = await model.findByPk(id);

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
