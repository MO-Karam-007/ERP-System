const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Team = _sequelize.define("Team",
    {
        Team_Name: {
            type: DataTypes.STRING,
            required: true
        },
        team_Description: {
            type: DataTypes.STRING,
        }
    }
)

module.exports = Team