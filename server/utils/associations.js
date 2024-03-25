const Department = require('../models/Departments')
const Training = require('../models/Trainings')
const Team = require('../models/Teams')
const Employee = require('../models/Employees')
const Report = require('../models/Reports')
const Position = require('../models/Positions')

function relationAssociation()
{
    Department.hasMany(Training)
    Training.belongsTo(Department)

    Team.hasMany(Employee, { foreignKey: 'teamId' })
    Employee.belongsTo(Team, { foreignKey: 'teamId' })

    Position.hasMany(Employee, { foreignKey: 'positionId' })
    Employee.belongsTo(Position, { foreignKey: 'positionId' })


    // Department.hasMany(Team)
    Team.belongsTo(Department)

    Report.belongsTo(Employee)
    Employee.hasMany(Report)


}


module.exports = relationAssociation