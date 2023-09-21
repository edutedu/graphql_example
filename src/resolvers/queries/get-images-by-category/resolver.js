import { Image } from "../../../models/Image.js";
import { yupSchema } from "./validate-input.js";

export const getImagesByCategory = async (args, context, info) => {
  await yupSchema().validate(args.category);
  const model = await Image();
  return await model.findAll({
    where: {
      category: args.category
    }
  });
};
