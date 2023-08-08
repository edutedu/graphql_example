import { Image } from "../../models/Image.js";

export const createImage = async (args, context, info) => {
  const { title, owner, category, url } = args.input;
  return await Image.create({
    title,
    owner,
    category,
    url
  });
};
