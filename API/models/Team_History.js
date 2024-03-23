const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Team_History = _sequelize.define("Branches",
    {
        start_date: {
            type: DataTypes.DATEONLY,
        },
        end_date: {
            type: DataTypes.DATEONLY,
        }
        ,
        team_name: {
            type: DataTypes.STRING,
        }
    }
)


module.exports = Branches