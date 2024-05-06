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
        }

    }

    let config = {

        tableName: "usuarios",
        timestamps: true,
        underscored: true

    }


    let Usuario = sequelize.define(alias, cols, config);

    return Usuario

}
