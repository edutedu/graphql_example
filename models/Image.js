import {DataTypes} from "sequelize";

export const Image = function (sequelize){
    return sequelize.define(
        "image",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            owner: {
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
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            deletedAt: {
                type: DataTypes.DATE,
            },
        },
        {
            timestamps: true,
            paranoid: true,
        }
    );
};