module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('pedidos', {
        id_pedido: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        data_solicitacao_pedido:{
            type: DataTypes.DATE            
        },
        data_atualizacao_pedido:{
            type: DataTypes.DATE            
        },
        status_do_pedido:{
            type:DataTypes.STRING,
        },
        numero_pedido:{
            type:DataTypes.INTEGER,
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