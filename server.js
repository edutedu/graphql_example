import express from "express"
import {graphqlHTTP} from "express-graphql";
import {graphql} from "graphql/graphql.js";
import {schema} from "./schema.js";
import {resolvers} from "./resolvers.js";


const root = {
    image: resolvers.Query.image,
    images: resolvers.Query.images,
    createImage: resolvers.Mutation.createImage,
    updateImage: resolvers.Mutation.updateImage,
    deleteImage: resolvers.Mutation.deleteImage
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(5000, () => {
   console.log("GraphQL server is running on port 5000");
});