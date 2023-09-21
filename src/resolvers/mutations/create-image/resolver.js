import { Image } from "../../../models/Image.js";
import { yupSchema } from "./validate-input.js";

export const createImage = async (args, context, info) => {
  await yupSchema().validate(args.input);
  const model = await Image();
  return model.create(args.input);
};
