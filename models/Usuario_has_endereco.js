module.exports = (sequelize, DataTypes) => {
    const Usuario_has_endereco = sequelize.define('usuario_has_endereco', {
        fk_id_usuario: {
            type: DataTypes.INTEGER
        },fk_id_endereco:{
            type: DataTypes.INTEGER            
        },
        timestamps: false,
        tableName: "usuario_has_endereco"
    })

    Usuario_has_endereco.associate = (listaDeModelos) =>{
        Usuario_has_endereco.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    Usuario_has_endereco.associate = (listaDeModelos) =>{
        Usuario_has_endereco.belongsTo(listaDeModelos.Endereco,{
            foreignKey:'fk_id_endereco',
            as:'endereco'
        })
    }

    return Usuario_has_endereco;
}