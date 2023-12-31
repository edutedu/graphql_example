import { DataTypes } from "sequelize";
import { sequelize } from "../../models/index.js";
export const up = async () => {
  const seq = await sequelize();
  await seq.getQueryInterface().createTable("images", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ownerId: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  });
};

export const down = async () => {
  const seq = await sequelize();
  await seq.getQueryInterface().dropTable("images");
};
