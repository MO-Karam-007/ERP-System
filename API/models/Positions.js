const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Position = _sequelize.define("Position", {
    position: {
        tyep: DataTypes.STRING
    }

})

module.exports = Position