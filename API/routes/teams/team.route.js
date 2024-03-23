var express = require('express');
var router = express.Router();
var { verfiyToken } = require('../../middlewares/OAuth')
var { checkBody } = require('../../utils/requiredData')
const teamService = require('../../Controller/teams.Controller')


router.route('/')
    .get(teamService.findAllTeams)
    .post(checkBody('Team_Name', 'DepartmentId')
        , teamService.createTeam)
// .delete(teamService.);
router.route('/:id')
    .get(teamService.findTeam)
    .put(teamService.updateTeam)
    .delete(teamService.deleteTeam);


module.exports = router;