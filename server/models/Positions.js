const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Position = _sequelize.define("Position",
    {
        title: {
            type: DataTypes.STRING
        }
    }
)

module.exports = Position