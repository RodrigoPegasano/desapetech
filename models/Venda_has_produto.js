module.exports = (sequelize, DataTypes) => {
    const Venda_has_produto = sequelize.define('venda_has_produto', {
        fk_id_venda: {
            type: DataTypes.INTEGER,
        },
        fk_id_produto:{
            type: DataTypes.INTEGER            
        },
        venda_fk_id_usuario:{
            type: DataTypes.INTEGER            
        },
        venda_fk_id_status_venda:{
            type: DataTypes.INTEGER
        },
        timestamps: false,
        tableName: "venda"
    });

    Venda_has_produto.associate = (listaDeModelos) =>{
        Venda_has_produto.belongsTo(listaDeModelos.Venda,{
            foreignKey:'fk_id_venda',
            as:'id_venda'
        })
    }

    Venda_has_produto.associate = (listaDeModelos) =>{
        Venda_has_produto.belongsTo(listaDeModelos.Produto,{
            foreignKey:'fk_id_produto',
            as:'id_produto'
        })
    }

    Venda_has_produto.associate = (listaDeModelos) =>{
        Venda_has_produto.belongsTo(listaDeModelos.Usuario,{
            foreignKey:'venda_fk_id_usuario',
            as:'fk_id_usuario'
        })
    }

    Venda_has_produto.associate = (listaDeModelos) =>{
        Venda_has_produto.belongsTo(listaDeModelos.Status_venda,{
            foreignKey:'venda_fk_id_status_venda',
            as:'fk_id_status_venda'
        })
    }

    return Venda_has_produto;
}