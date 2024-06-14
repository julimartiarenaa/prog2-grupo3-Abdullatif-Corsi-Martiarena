module.exports = function(sequelize, dataTypes) {

    let alias = "Usuario"

    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        usuario: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        contrasenia: {
            type: dataTypes.STRING
        },

        fecha: {
            type: dataTypes.DATE
        },

        dni: {
            type: dataTypes.INTEGER
        },

        foto_perfil: {
            type: dataTypes.STRING
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

        tableName: "usuarios",
        timestamps: true,
        underscored: false

    }


    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'id'
        }),

        Usuario.belongsTo(models.Comentario, {
            as: 'comentario',
            foreignKey: 'id'
        })
        
    }

    return Usuario

}
