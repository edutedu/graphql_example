'use strict';
import {Sequelize} from "sequelize";
import {Image} from "./Image.js";

const sequelize = new Sequelize('test', 'eduard', 'test1234', {
  host: 'localhost',
  dialect: 'postgres'
});



try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export {sequelize, Image}