import { yupSchema } from "./validate-input.js";
import { Owner } from "../../../models/Owner.js";

export const createOwner = async (args, context, info) => {
  await yupSchema().validate(args.input);
  const model = await Owner();
  return model.create(args.input);
};
