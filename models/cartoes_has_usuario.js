module.exports = (sequelize, DataTypes) => {
    const cartoes_has_usuario = sequelize.define('cartoes_has_usuario', {
        fk_id_usuario: {
            
        },fk_id_endereco:{
                        
        },
        timestamps: false,
        tableName: "cartoes_has_usuarios"
    });
    return cartoes_has_usuario;
}