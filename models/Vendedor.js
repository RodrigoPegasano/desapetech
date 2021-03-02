module.exports = (sequelize, DataTypes) => {
    const Vendedor = sequelize.define('Vendedor', {
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