import { DataTypes } from "sequelize";
import { sequelize } from "../../models/index.js";
export const up = async () => {
  const seq = await sequelize();
  await seq.getQueryInterface().createTable("owner", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
};

export const down = async () => {
  const seq = await sequelize();
  await seq.getQueryInterface().dropTable("images");
};
