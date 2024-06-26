module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        comentador_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        url_foto_perfil: {
            type: dataTypes.STRING(100)
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
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "producto_id"
        }),

        Comentario.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "comentador_id"
        })
    }

    return Comentario
}