const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const produto = sequelize.define('produto', {
        idProduto: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nomeProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precoProduto:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        quantidadeProduto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagemProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descricaoProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        produtoAtivo:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        timestamps: false,
        tableName: "usuarios"
    });
    return Usuario;
}