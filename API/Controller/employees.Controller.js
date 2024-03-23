const Employee = require('../models/Employees')
const factory = require('./CRUDfacrory')
const { generateCode } = require('../utils/methods')
const asyncHandler = require('express-async-handler')


// Secand parameter to select all active users FOR EMPLOYEE TABLE
exports.findAllEmployees = factory.find(Employee, true)


exports.findEmployee = factory.findOne(Employee)


exports.createEmployee = asyncHandler(async (req, res) =>
{

    const employee_code = generateCode()
    const body = Object.assign({ ...req.body }, { employee_code })

    const doc = await Employee.create(body).catch(err => { res.json({ err: err }) })

    res.status(201).json({
        data: doc
    })
})



exports.updateEmployee = factory.update(Employee, "id")


exports.deleteEmployee = factory.unactiving(Employee)
