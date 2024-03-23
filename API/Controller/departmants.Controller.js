const Department = require('../models/Departments')
const factory = require('./CRUDfacrory')





exports.findAllDepartments = factory.find(Department)


exports.findDepartment = factory.findOne(Department)


exports.createDepartment = factory.create(Department)


exports.updateDepartment = factory.update(Department)


exports.deleteDepartment = factory.delete(Department)

// exports.deleteAllDepartments = factory.deleteAll(Department, "Department_ID")