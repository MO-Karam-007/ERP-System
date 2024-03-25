const { v4: uuidv4 } = require("uuid")
const _sequelize = require("../config/Database");
const { DataTypes } = require("sequelize")

const Employee = _sequelize.define("Employee", {
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
        , default: ''
    },
    display_name: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },
    picture_url: {
        type: DataTypes.STRING
        , default: ''

    },
    salutation: {
        // SalutionTable
        type: DataTypes.ENUM(["Mr", "Mrs", "Miss", "Ms"])
        , default: "Mr"

    },
    marital_status: {
        type: DataTypes.ENUM("Married", "Single")
        , default: "Single"

    },

    employment_start_date: {
        type: DataTypes.DATEONLY,
        required: true
    },
    Hire_Date: {
        type: DataTypes.STRING
        , default: '2023-10-10'

    },
    employment_end_date: {
        type: DataTypes.DATEONLY
        , default: '2023-10-10'

    },
    birthday: {
        type: DataTypes.DATEONLY
        , default: '2023-10-10'

    },
    // team: {
    //     type: DataTypes.STRING
    // },
    leaving_reason: {
        type: DataTypes.DATEONLY
        , default: ''

    },
    employee_code: {
        type: DataTypes.STRING,
        unique: true,
        required: true
    },
    gender: {
        type: DataTypes.ENUM({ values: ["Male", "Female"] })
        , default: "Male"

    },
    // employment_status: {
    //     type: DataTypes.ENUM({
    //         values: ["Contract", "Full-Time", "Intern", "Temporary", "Unemployed", "Volunteer"]
    //     }),
    //     default: "Contract"

    // },
    National_ID: {
        type: DataTypes.INTEGER
        , default: 0

    },
    deceased_on: {
        type: DataTypes.DATEONLY
        , default: ''

    },
    description: {
        type: DataTypes.STRING
        , default: ''

    },
    works_remote: {
        type: DataTypes.BOOLEAN
        , default: false

    },
    active: {
        type: DataTypes.BOOLEAN,
        default: true
    }

})

module.exports = Employee