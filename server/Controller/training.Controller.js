const { where } = require('sequelize')
const Training = require('../models/Trainings')
const factory = require('./CRUDfacrory')
const asyncHandler = require('express-async-handler')


// @desc    Get All Trainings
// @route   GET /hr/departments/trainings
// @access  Private/Admin-Manager
exports.findAllTrainings = factory.find(Training)


exports.findTraining = factory.findOne(Training)


exports.createTraining = factory.create(Training)



exports.updateTraining = factory.update(Training)


exports.deleteTraining = factory.delete(Training)
