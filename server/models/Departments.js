const { v4: uuidv4 } = require('uuid')
const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Department = _sequelize.define('Department', {

    Department: {
        type: DataTypes.STRING,
        required: true
    },
    Department_Name: {
        type: DataTypes.STRING,
        required: true

    },
    Department_Description: {
        type: DataTypes.STRING
    }


})

module.exports = Department


