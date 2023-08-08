import { queryResolvers } from "./queries/query-resolvers.js";
import { mutationResolvers } from "./mutations/mutation-resolvers.js";
export const resolver = {
  Query: { queryResolvers },
  Mutation: { mutationResolvers }
};
