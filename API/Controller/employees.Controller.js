const Employee = require('../models/Employees')
const factory = require('./CRUDfacrory')
const { generateCode } = require('../utils/methods')
const asyncHandler = require('express-async-handler')
const Sequelize = require('sequelize')


// Secand parameter to select all active users FOR EMPLOYEE TABLE
exports.findAllEmployees = factory.find(Employee, true)


exports.findEmployee = factory.findOne(Employee)


exports.createEmployee = asyncHandler(async (req, res) =>
{

    try
    {
        const employee_code = generateCode()
        const body = Object.assign({ ...req.body }, { employee_code })

        const doc = await Employee.create(body)

        res.status(201).json({
            data: doc
        })
    } catch (error)
    {
        if (error instanceof Sequelize.ValidationError)
        {
            const errors = error.errors.map(err => err.message); // Extract validation error messages
            res.status(400).json({ errors }); // Return a 400 Bad Request with specific messages
        } else
        { // Handle other errors
            console.error(error); // Log the complete error for debugging
            res.status(500).json({ error: 'Internal Server Error' }); // Generic error for unexpected situations
        }

    }





})



exports.updateEmployee = factory.update(Employee, "id")


exports.deleteEmployee = factory.unactiving(Employee)
