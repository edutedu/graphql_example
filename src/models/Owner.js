import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";
import { Image } from "./Image.js";

export const Owner = async () => {
  const seq = await sequelize();
  const owner = seq.define(
    "owner", {
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
    },
    {
      timestamps: true,
      paranoid: true
    });
  owner.hasMany(Image, {
    foreignKey: "owner_id",
    onDelete: "cascade",
    hooks: true
  });
  return owner;
};
