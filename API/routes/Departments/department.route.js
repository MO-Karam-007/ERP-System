var express = require('express');
var router = express.Router();

const departmentService = require('../../Controller/departmants.Controller');
const { generateTokens, verfiyToken } = require('../../middlewares/OAuth');
const { checkBody } = require('../../utils/requiredData')

router.route('/')
    .get(departmentService.findAllDepartments)
    .post(checkBody('Department', 'Department_Name'), departmentService.createDepartment)
// .delete(departmentService.deleteAllDepartments);
router.route('/:id')
    .get(generateTokens, departmentService.findDepartment)
    .put(departmentService.updateDepartment)
    .delete(departmentService.deleteDepartment);


module.exports = router;