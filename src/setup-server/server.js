import { Config } from "./config.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema.js";
import { sequelize } from "../models/index.js";
import { runMigrations } from "../migrate-db/migration-run.js";
import { root } from "./root-resolver.js";

const app = express();

const startApp = async () => {
  try {
    const seq = await sequelize();
    await seq.sync();
    await runMigrations();
    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
      })
    );

    app.listen(Config.port, () => {
      console.log(`GraphQL server is running on port ${Config.port}`);
    });
  } catch (error) {
    console.error("Error starting the app: ", error);
    throw error;
  }
};

startApp();
