module.exports = (sequelize, DataTypes) => {
    const comprador = sequelize.define('comprador', {
        id_comprador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },status_comprador:{
            type: DataTypes.INTEGER            
        },fk_id_usuario:{

        },
        timestamps: false,
        tableName: "compradors"
    });
    return comprador;
}