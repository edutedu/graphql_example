import express from "express"
import {graphqlHTTP} from "express-graphql";
import {graphql} from "graphql/graphql.js";
import {schema} from "./schema.js";
import {resolvers} from "./resolvers.js";
import {sequelize} from "./models/index.js";
import runMigrations from "./db/migration-run.js";


const root = {
    image: resolvers.Query.getImageById,
    images: resolvers.Query.getImagesByCategory,
    createImage: resolvers.Mutation.createImage,
    updateImage: resolvers.Mutation.updateImage,
    deleteImage: resolvers.Mutation.deleteImage
};

const app = express();

async function startApp(){
    try{
        await sequelize.sync();
        await runMigrations();
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
    }catch (err){
        console.error("Error starting the app: ", err);
    }
}

startApp();