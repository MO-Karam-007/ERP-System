const Department = require('../models/Departments')
const Training = require('../models/Trainings')
const Team = require('../models/Teams')
const Employee = require('../models/Employees')
const Report = require('../models/Reports')

function relationAssociation()
{
    Department.hasMany(Training)
    Training.belongsTo(Department)
    // // Team.hasMany(Employee, { foreignKey: 'TeamId' })
    // // Employee.belongsTo(Team)

    // Department.hasMany(Team)
    // Team.belongsTo(Department)

    Report.belongsTo(Employee)
    Employee.hasMany(Report)


}


module.exports = relationAssociation