
const Team = require('../models/Teams')
const factory = require('./CRUDfacrory')
const asyncHandler = require('express-async-handler')


// @desc    Get All Teams
// @route   GET /hr/departments/Teams
// @access  Private/Admin-Manager
exports.findAllTeams = factory.find(Team)


exports.findTeam = factory.findOne(Team)


exports.createTeam = factory.create(Team)



exports.updateTeam = factory.update(Team)


exports.deleteTeam = factory.delete(Team)
