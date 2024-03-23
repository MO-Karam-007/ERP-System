var express = require('express');
var router = express.Router();
var { verfiyToken } = require('../../middlewares/OAuth')
var { checkBody } = require('../../utils/requiredData')
const employeeService = require('../../Controller/employees.Controller')


router.route('/')
    .get(employeeService.findAllEmployees)
    .post(checkBody('email', 'first_name', 'last_name', 'employment_start_date')
        , employeeService.createEmployee)


// .delete(employeeService.);
router.route('/:id')
    .get(employeeService.findEmployee)
    .put(employeeService.updateEmployee)
router.route('/delete/:id')
    .patch(employeeService.deleteEmployee);


module.exports = router;