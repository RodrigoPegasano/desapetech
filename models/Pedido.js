module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        id_pedido: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        data_solicitacao_pedido:{
            type: sequelize.DATE            
        },
        data_atualizacao_pedido:{
            type: sequelize.DATE            
        },
        status_pedido:{
            type:sequelize.STRING,
        },
        numero_pedido:{
            type:sequelize.INTEGER,
        },
        fk_id_usuario:{
            type:sequelize.INTEGER,
        },
        fk_id_status_pedido:{
            type:sequelize.INTEGER,
        },
        timestamps: false,
        tableName: "pedido"
    });

    Pedido.associate = (listaDeModelos) =>{
        Pedido.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    Pedido.associate = (listaDeModelos) =>{
        Pedido.belongsTo(listaDeModelos.Produto_has_pedido,{
            foreignKey:'fk_id_status_pedido',
            as:'id_status_pedido'
        })
    }
    return Pedido;
}