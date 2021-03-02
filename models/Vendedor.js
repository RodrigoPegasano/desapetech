module.exports = (sequelize, DataTypes) => {
    const vendedor = sequelize.define('vendedor', {
        id_vendedor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },status_vendedor:{
            type: DataTypes.INTEGER            
        },fk_id_usuario:{

        },
        timestamps: false,
        tableName: "vendedors"
    });
    return vendedor;
}