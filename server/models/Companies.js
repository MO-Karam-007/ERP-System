const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Company = _sequelize.define("Company",
    {
        Company_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        Company_Title: {
            type: DataTypes.STRING,
        }
    }
)


module.exports = Company