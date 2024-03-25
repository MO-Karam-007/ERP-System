const { where } = require('sequelize')
const factory = require('./CRUDfacrory')
const asyncHandler = require('express-async-handler')
const Position = require('../models/Positions')


// @desc    Get All Positions
// @route   GET /hr/departments/trainings
// @access  Private/Admin-Manager
exports.findAllPositions = factory.find(Position)


exports.findPosition = factory.findOne(Position)


exports.createPosition = factory.create(Position)



exports.updatePosition = factory.update(Position)


exports.deletePosition = factory.delete(Position)
