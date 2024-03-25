const { v4: uuidv4 } = require("uuid")
const _sequelize = require("../config/Database");
const { DataTypes } = require("sequelize")
const Sequelize = require('sequelize')



const Employee = _sequelize.define("Employee", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middle_name: {
        type: DataTypes.STRING
    },
    display_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    picture_url: {
        type: DataTypes.STRING,
        defaultValue: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
    },
    salutation: {
        type: DataTypes.ENUM(["Mr.", "Mrs.", "Miss.", "Ms."])
        , defaultValue: "Mr."
    },
    marital_status: {
        type: DataTypes.ENUM("Married", "Single"),
    },
    employment_start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_DATE'),
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
    // team_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    leaving_reason: {
        type: DataTypes.STRING
    },
    employee_code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM({ values: ["Male", "Female"] })
    },
    employment_status: {
        type: DataTypes.ENUM({
            values: ["Contract", "Full-Time", "Intern", "Temporary", "Unemployed", "Volunteer"]
        }),
        defaultValue: "Contract"
    }
    ,
    National_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    deceased_on: {
        type: DataTypes.DATEONLY
    },
    description: {
        type: DataTypes.STRING
    },
    works_remote: {
        type: DataTypes.BOOLEAN
        , defaultValue: false

    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }

})

module.exports = Employee