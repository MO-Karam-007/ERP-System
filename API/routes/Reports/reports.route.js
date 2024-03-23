var express = require('express');
var router = express.Router();

const reportService = require('../../Controller/reports.Controller');
const { generateTokens, verfiyToken } = require('../../middlewares/OAuth');
const { checkBody } = require('../../utils/requiredData')

router.route('/')
    .get(reportService.findAllReports)
    .post(checkBody('EmployeeId', 'Report'), reportService.createReport)
// .delete(reportService.deleteAllreports);
router.route('/:id')
    .get(generateTokens, reportService.findReport)
    .put(reportService.updateReport)
    .delete(reportService.deleteReport);


module.exports = router;