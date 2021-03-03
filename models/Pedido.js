module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('pedidos', {
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
        status_do_pedido:{
            type:sequelize.STRING,
        },
        numero_pedido:{
            type:sequelize.INTEGER,
        },
        fk_id_usuario:{
            type:DataTypes.INTEGER,
        },
        
        timestamps: true,
        tableName: "pedidos"
    });

    Pedido.associate = (listaDeModelos) =>{
        Pedido.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    
    return Pedido;
}