module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id:{
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        vendedor_id: {
            type: dataTypes.INTEGER
        },
        url_imagen: {
            type: dataTypes.string
        },
        nombre: {
            type: dataTypes.string
        },
        descripcion: {
            type: dataTypes.STRING(500)
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    }

    let Producto = sequelize.define(alias, cols, config);
    return Producto;
}