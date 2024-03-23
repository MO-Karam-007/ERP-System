const { v4: uuidv4 } = require('uuid')
const _sequelize = require('../config/Database');
const { DataTypes } = require('sequelize')

const Employee = _sequelize.define('Employee', {
    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        required: true
    },
    last_name: {
        type: DataTypes.STRING,
        required: true
    },
    middle_name: {
        type: DataTypes.STRING
    },
    display_name: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    picture_url: {
        type: DataTypes.STRING
    },
    salutation: {
        // SalutionTable
        type: DataTypes.ENUM(['Mr', 'Mrs', 'Miss', 'Ms'])
    },
    marital_status: {
        type: DataTypes.ENUM('Married', "Single"),
    },
    gender: {
        type: DataTypes.ENUM('Male', "Female"),
    },
    employment_start_date: {
        type: DataTypes.DATEONLY,
        required: true
    },
    Hire_Date: {
        type: DataTypes.STRING
    },
    employment_end_date: {
        type: DataTypes.DATEONLY
    },
    birthday: {
        type: DataTypes.DATEONLY
    },
    // team: {
    //     type: DataTypes.STRING
    // },
    leaving_reason: {
        type: DataTypes.DATEONLY
    },
    employee_code: {
        type: DataTypes.STRING,
        unique: true,
        required: true
    },
    employment_status: {
        type: DataTypes.ENUM(['Contract', 'Full-Time', 'Full-Time', 'Intern', 'Temporary', 'Unemployed', 'Volunteer']),
        default: 'Contract'
    },
    National_ID: {
        type: DataTypes.INTEGER,
    },
    deceased_on: {
        type: DataTypes.DATEONLY
    },
    description: {
        type: DataTypes.STRING,
    },
    works_remote: {
        type: DataTypes.BOOLEAN
    },
    active: {
        type: DataTypes.BOOLEAN,
        default: true

    }

})

module.exports = Employee