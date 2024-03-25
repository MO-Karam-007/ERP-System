var express = require('express');
var router = express.Router();
var { verfiyToken } = require('../../middlewares/OAuth')
var { checkBody } = require('../../utils/requiredData')
const positionService = require('../../Controller/position.Controller')


router.route('/')
    .get(positionService.findAllPositions)
    .post(positionService.createPosition)
// .delete(positionService.);
router.route('/:id')
    .get(positionService.findPosition)
    // .put(positionService.)
    .delete(positionService.deletePosition);


module.exports = router;