const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')


const Training = _sequelize.define("Training",
    {
        Training_Title: {
            type: DataTypes.STRING,
        },
        Trainig_Description: {
            type: DataTypes.STRING,
        },
        training_start_date: {
            type: DataTypes.DATEONLY
        },
    }
)

module.exports = Training