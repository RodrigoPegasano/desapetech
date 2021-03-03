module.exports = (sequelize, DataTypes) => {
    const cartoes_has_usuario = sequelize.define('cartoes_has_usuario', {
        fk_id_cartoes: {
            type: DataTypes.INTEGER
        },fk_id_usuario:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "cartoes_has_usuario"
    })

    cartoes_has_usuario.associate = (listaDeModelos) =>{
        cartoes_has_usuario.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    cartoes_has_usuario.associate = (listaDeModelos) =>{
        cartoes_has_usuario.belongsTo(listaDeModelos.Cartoes,{
            foreignKey:'fk_id_cartoes',
            as:'cartoes'
        })
    }
    return cartoes_has_usuario;
}