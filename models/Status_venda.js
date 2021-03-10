module.exports = (sequelize, DataTypes) => {
    const Status_venda = sequelize.define('Status_venda', {
        id_status_venda: {
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
            type: DataTypes.INTEGER
        },
        tipo_envio:{
            type: DataTypes.STRING
        },
        custo_envio:{
            type: DataTypes.INTEGER
        },
        num_regiao_envio:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "status_venda"
    });

    return Status_venda;
}