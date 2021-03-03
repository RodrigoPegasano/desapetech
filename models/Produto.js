module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('produto', {
        idProduto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nomeProduto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precoProduto:{
            type: DataTypes.FLOAT,
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