module.exports = (sequelize, DataTypes) => {
    const Vendedor = sequelize.define('vendedor', {
        id_vendedor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },status_vendedor:{
            type: DataTypes.INTEGER            
        },fk_id_usuario:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "vendedor"
    });

    Vendedor.associate = (listaDeModelos) =>{
        Vendedor.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    return Vendedor;
}