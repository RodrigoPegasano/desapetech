module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('produto', {
        id_produto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        preco_produto:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        
        nomeProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
        quantidadeProduto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagemProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descricaoProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        produtoAtivo:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
        tableName: "produto"
    })
    return Produto;
}