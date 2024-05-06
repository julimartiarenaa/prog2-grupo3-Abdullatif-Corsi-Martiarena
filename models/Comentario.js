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
            type: dataTypes.STRING(500)
        },
        url_foto_perfil: {
            type: dataTypes.STRING(100)
        }
    };
    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
    };

    let Comentario = sequelize.define(alias, cols, config);
    return Comentario
}