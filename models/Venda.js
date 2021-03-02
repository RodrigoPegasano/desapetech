module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define('Venda', {
        id_venda: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        data_solicitacao_venda:{
            type: DataTypes.DATE            
        },
        data_atualizacao_venda:{
            type: DataTypes.DATE            
        },
        status_venda:{
            type: DataTypes.STRING
        },
        fk_id_usuario:{
            type: DataTypes.INTEGER
        },
        fk_id_status_venda:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "Venda"
    });

    Venda.associate = (listaDeModelos) =>{
        Venda.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'fk_id_usuario',
            as:'usuario'
        })
    }

    Venda.associate = (listaDeModelos) =>{
        Venda.belongsTo(listaDeModelos.status_venda,{
            foreignKey:'fk_id_status_venda',
            as:'id_status_venda'
        })
    }

    return Venda;
}