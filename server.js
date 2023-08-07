import express from "express"
import {graphqlHTTP} from "express-graphql";
import {schema} from "./schema.js";
import {resolvers} from "./resolvers.js";
import {sequelize} from "./models/index.js";
import runMigrations from "./migrate-db/migration-run.js";


const root = {
    image: resolvers.Query.getImageById,
    images: resolvers.Query.getImagesByCategory,
    createImage: resolvers.Mutation.createImage,
    updateImage: resolvers.Mutation.updateImage,
    deleteImage: resolvers.Mutation.deleteImage
};

const app = express();

const startApp = async () => {
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
    }catch (error){
        console.error("Error starting the app: ", error);
        throw error;
    }
}

startApp();