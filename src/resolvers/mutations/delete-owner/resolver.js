import { yupSchema } from "./validate-input.js";
import { Owner } from "../../../models/Owner.js";

export const deleteOwner = async (args, _context, _info) => {
  await yupSchema().validate(args.id);
  const model = await Owner();
  const ownerToBeDeleted = await model.findByPk(args.id);

  if (ownerToBeDeleted === null) {
    return `The owner with the id ${args.id} cannot be deleted because it doesn't exist`;
  }
  await model.destroy({ cascade: true });

  return `The owner with id ${args.id} has been successfully deleted`;
};
