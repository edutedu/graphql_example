"use strict";
import { Sequelize } from "sequelize";
import { Config } from "../setup-server/config.js";

const sequelize = new Sequelize(Config.database, Config.user, Config.password, {
  host: Config.host,
  dialect: Config.dialect
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  throw error;
}

export { sequelize };
