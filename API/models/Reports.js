const { v4: uuidv4 } = require('uuid')
const _sequelize = require('../config/Database');
const { DataTypes, ENUM } = require('sequelize')

const Report = _sequelize.define('Report ', {
    Report: {
        type: DataTypes.STRING
    }
})

module.exports = Report