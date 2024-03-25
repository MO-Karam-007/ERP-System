const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Branches = _sequelize.define("Branches",
    {
        Branch_Name: {
            type: DataTypes.STRING,
        },
    }
)


module.exports = Branches