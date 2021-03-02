module.exports = (sequelize, DataTypes) => {
    const Produto_has_pedido = sequelize.define('Produto_has_pedido', {
        fk_id_produto: {
            type: DataTypes.INTEGER,
        },fk_id_pedido:{
            type: DataTypes.INTEGER            
        },
        timestamps: false,
        tableName: "Produto_has_pedido"
    });

    Produto_has_pedido.associate = (listaDeModelos) =>{
        Produto_has_pedido.belongsTo(listaDeModelos.Produto,{
            foreignKey:'fk_id_produto',
            as:'produto'
        })
    }

    Produto_has_pedido.associate = (listaDeModelos) =>{
        Produto_has_pedido.belongsTo(listaDeModelos.Pedido,{
            foreignKey:'fk_id_pedido',
            as:'pedido'
        })
    }
    return Produto_has_pedido;
}