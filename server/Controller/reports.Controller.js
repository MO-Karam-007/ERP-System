const Report = require('../models/Reports')
const factory = require('./CRUDfacrory')


// @desc    Get All Reports
// @route   GET /hr/departments/Reports
// @access  Private/Admin-Manager
exports.findAllReports = factory.find(Report)


exports.findReport = factory.findOne(Report)


exports.createReport = factory.create(Report)



exports.updateReport = factory.update(Report)


exports.deleteReport = factory.delete(Report)
