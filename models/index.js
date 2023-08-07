'use strict';
import {Sequelize} from "sequelize";
import {Image} from "./Image.js";
import config from '../config/config.json' assert { type: 'json' };

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});



try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
  throw error;
}

export {sequelize, Image}