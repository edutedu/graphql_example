import { queryResolvers } from "./queries/index.js";
import { mutationResolvers } from "./mutations/index.js";
export const resolver = {
  Query: { queryResolvers },
  Mutation: { mutationResolvers }
};
