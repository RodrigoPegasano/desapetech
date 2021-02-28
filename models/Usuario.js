const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', {
        idUsuario: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        emailUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nomeUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nomeUsuarioSobrenome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rgUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cpfUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        celularUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        senhaUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cepUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        enderecoUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroEnderecoUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complementoEnderecoUsuario:{
            type: DataTypes.STRING
        },
        bairroEnderecoUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cidadeEnderecoUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estadoEnderecoUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        timestamps: false,
        tableName: "usuarios"
    });
    return Usuario;
}