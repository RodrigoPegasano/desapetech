module.exports = (sequelize, DataTypes) => {
    const status_pedido = sequelize.define('status_pedido', {
        id_status_pedido: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        data_envio:{
            type: DataTypes.DATE            
        },
        data_status:{
            type: DataTypes.DATE 
        },
        numero_envio:{
            type:DataTypes.INTEGER,
        },
        tipo_envio:{
            type:DataTypes.STRING,
        },
        custo_envio:{
            type:DataTypes.INTEGER,
        },
        num_regiao_envio:{
            type:DataTypes.INTEGER,
        },

        timestamps: false,
        tableName: "status_pedido"
    });

    // Telefone.associate = (listaDeModelos) =>{
    //     Telefone.belongsTo(listaDeModelos.Usuario,{
    //         foreignKey:'fk_id_usuario',
    //         as:'usuario'
    //     })
    // }
    return status_pedido;
}