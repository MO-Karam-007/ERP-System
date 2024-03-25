const { v4: uuidv4 } = require('uuid')
const sequelize = require('../config/Database');
const { DataTypes, ENUM } = require('sequelize')


const Promotion = sequelize.define('Promotion', {
    Promotion_ID: {
        type: DataTypes.STRING
    },
    Promotion: {
        type: DataTypes.STRING
    },
    Promotion_Name: {
        type: DataTypes.STRING
    },
    level_of_promotion: {
        type: DataTypes.INTEGER
    }


})


