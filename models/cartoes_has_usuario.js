module.exports = (sequelize, DataTypes) => {
    const cartoes_has_usuario = sequelize.define('cartoes_has_usuario', {
        fk_id_usuario: {
            type: DataTypes.INTEGER
        },fk_id_endereco:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "cartoes_has_usuarios"
    });

    cartoes_has_usuario.associate = (listaDeModelos) =>{
        cartoes_has_usuario.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    cartoes_has_usuario.associate = (listaDeModelos) =>{
        cartoes_has_usuario.belongsTo(listaDeModelos.Endereco,{
            foreignKey:'fk_id_endereco',
            as:'endereco'
        })
    }
    return cartoes_has_usuario;
}