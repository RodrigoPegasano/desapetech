module.exports = (sequelize, DataTypes) => {
    const Produto_has_pedido = sequelize.define('produto_has_pedido', {
        fk_id_pedido:{
            type: DataTypes.INTEGER 
        },fk_id_usuario:{
            type: DataTypes.INTEGER 
        },fk_id_status_pedido:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "produto_has_pedido"
    });

    Produto_has_pedido.associate = (listaDeModelos) =>{
        Produto_has_pedido.belongsTo(listaDeModelos.Pedido,{
            foreignKey:'fk_id_pedido',
            as:'pedido'
        })
    }

    Produto_has_pedido.associate = (listaDeModelos) =>{
        Produto_has_pedido.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    Produto_has_pedido.associate = (listaDeModelos) =>{
        Produto_has_pedido.belongsTo(listaDeModelos.Status_pedido,{
            foreignKey:'fk_id_status_pedido',
            as:'id_status_pedido'
        })
    }
    return Produto_has_pedido;
}