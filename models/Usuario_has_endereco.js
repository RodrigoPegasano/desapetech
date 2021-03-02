module.exports = (sequelize, DataTypes) => {
    const usuario_has_endereco = sequelize.define('usuario_has_endereco', {
        fk_id_usuario: {
            type: DataTypes.INTEGER
        },fk_id_endereco:{
            type: DataTypes.INTEGER            
        },
        timestamps: false,
        tableName: "usuario_has_enderecos"
    });
    return usuario_has_endereco;
}