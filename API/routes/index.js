const express = require('express')
const app = express();
const deparmentRoute = require('./Departments/department.route')
const trainingRoute = require('./Trainings/training.route');
const employeeRoute = require('./Employees/employee.route')
const teamRoute = require('./teams/team.route')
const reportRoute = require('./Reports/reports.route')
const { verfiyToken } = require('../middlewares/OAuth');
/* GET home page. */

app.use('/department', deparmentRoute)
app.use('/trainings', trainingRoute)
app.use('/employee', employeeRoute)
app.use('/teams', teamRoute)
app.use('/reports', reportRoute)



module.exports = app

