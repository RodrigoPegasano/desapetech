module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        id_endereco: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },endereco:{
            type: DataTypes.STRING            
        },numero_endereco:{
            type: DataTypes.INTEGER            
        },complemento_endereco:{
            type: DataTypes.STRING                       
        },cep_endereco:{
            type: DataTypes.STRING                       
        },bairro_endereco:{
            type: DataTypes.STRING                       
        },uf_endereco:{
            type: DataTypes.STRING                       
        },cidade_endereco:{
            type: DataTypes.STRING                       
        },
        timestamps: false,
        tableName: "endereco"
    });

    return Endereco;
}