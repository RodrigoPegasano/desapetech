module.exports = (sequelize, DataTypes) => {
    const telefone = sequelize.define('telefone', {
        id_telefone: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },tel_celular:{
            type: DataTypes.INTEGER            
        },tel_residencial:{
            type: DataTypes.INTEGER            
        },fk_id_usuario:{
            
            
        },
        timestamps: false,
        tableName: "telefones"
    });
    return telefone;
}