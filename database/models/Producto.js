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
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING(500)
        },

        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt : {
            type: dataTypes.DATE
        },

        deletedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    }

    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function (models) {
        Producto.hasMany( models.Comentario,{
            as: "comentarios",
            foreignKey: "comentador_id"
        }),
        Producto.belongsTo( models.Usuario,{
            as: "usuarios",
            foreignKey: "vendedor_id"
        })
        
        }
    return Producto;
}