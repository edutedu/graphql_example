import express from "express"
import {graphqlHTTP} from "express-graphql";
import {schema} from "./schema.js";
import {sequelize} from "../models/index.js";
import runMigrations from "../migrate-db/migration-run.js";
import {root} from "./root-resolver.js";

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