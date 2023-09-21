import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";
import { Owner } from "./Owner.js";

export const Image = async () => {
  const seq = await sequelize();
  const image = seq.define(
    "image",
    {
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
      },
      ownerId: DataTypes.INTEGER
    },
    {
      timestamps: true,
      paranoid: true
    });
  image.belongsTo(Owner, {
    foreignKey: "ownerId"
  });
  return image;
};
