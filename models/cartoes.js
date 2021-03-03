module.exports = (sequelize, DataTypes) => {
    const cartoes = sequelize.define('cartoes', {
        id_cartao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },bandeira_cartao:{
            type: DataTypes.STRING
        },numero_cartao:{
            type: DataTypes.INTEGER
        },nome_cartao:{
            type: DataTypes.STRING
        },data_validade_cartao:{
            type: DataTypes.DATE
        },cod_cartao:{
            type: DataTypes.TINYINT
        },data_inclusao_cartao:{
            type: DataTypes.DATE
        },status_cartao:{
            type: DataTypes.INTEGER
        },
        timestamps: true,
        tableName: "cartoes"
    });
    return cartoes;
}