import "dotenv/config.js";

export const Config = ({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  dialect: process.env.DIALECT
});
