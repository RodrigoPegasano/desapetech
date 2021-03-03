module.exports = (sequelize, DataTypes) => {
    const Comprador = sequelize.define('Comprador', {
        id_comprador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },status_comprador:{
            type: DataTypes.INTEGER            
        },fk_id_usuario:{
            type:DataTypes.INTEGER,
        },
        timestamps: false,
        tableName: "comprador"
    })

    Comprador.associate = (listaDeModelos) =>{
        Comprador.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }
    return Comprador;
}