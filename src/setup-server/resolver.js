import { queryResolvers } from "../resolvers/query-resolvers.js";
import { mutationResolvers } from "../resolvers/mutation-resolvers.js";
export const resolver = {
  Query: { queryResolvers },
  Mutation: { mutationResolvers }
};
