var express = require('express');
var router = express.Router();
var { verfiyToken } = require('../../middlewares/OAuth')
var { checkBody } = require('../../utils/requiredData')
const departmentService = require('../../Controller/training.Controller')


router.route('/')
    .get(departmentService.findAllTrainings)
    .post(checkBody('Training_Title', 'training_start_date'), departmentService.createTraining)
// .delete(departmentService.);
router.route('/:id')
    .get(departmentService.findTraining)
    // .put(departmentService.createTraining)
    .delete(departmentService.deleteTraining);


module.exports = router;