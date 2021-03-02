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

    usuario_has_endereco.associate = (listaDeModelos) =>{
        usuario_has_endereco.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    usuario_has_endereco.associate = (listaDeModelos) =>{
        usuario_has_endereco.belongsTo(listaDeModelos.Endereco,{
            foreignKey:'fk_id_endereco',
            as:'endereco'
        })
    }

    return usuario_has_endereco;
}