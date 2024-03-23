const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Address = _sequelize.define("Address",
    {
        Home_No: {
            type: DataTypes.INTEGER,
        },
        st_Name: {
            type: DataTypes.STRING,
        },
        State: {
            type: DataTypes.STRING,
        },
        City: {
            type: DataTypes.INTEGER,
        },

    }
)



module.exports = Address