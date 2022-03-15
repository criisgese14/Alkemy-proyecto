const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("movements", {
        concept: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.STRING,
        },
        type: DataTypes.ENUM("Ingreso", "Egreso")
    })
}