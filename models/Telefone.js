module.exports = (sequelize, DataTypes) => {
    const Telefone = sequelize.define('telefone', {
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
            type:DataTypes.INTEGER,
        },
        timestamps: false,
        tableName: "telefone"
    })

    Telefone.associate = (listaDeModelos) =>{
        Telefone.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }
    return Telefone;
}