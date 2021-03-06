module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento:{
            type: DataTypes.DATE,
            allowNull: false
        },
        sexo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        data_criacao_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_atualizacao_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        senhaUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        timestamps: true,
        tableName: "usuario"
    });
    return Usuario;
}