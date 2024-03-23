const { v4: uuidv4 } = require('uuid')
const sequelize = require('../config/Database');
const { DataTypes, ENUM } = require('sequelize')

const Phone = sequelize.define('Phone ', {
    work_phone: {
        type: DataTypes.STRING
    },
    home_phone: {
        type: DataTypes.STRING

    }
    ,
    mobile_phone: {
        type: DataTypes.STRING
    },
    secand_mobile_phone: {
        type: DataTypes.STRING
    }

})

module.exports = Phone