const express = require('express');
const router = express. Router();
const Stand= require ("../model/stand")
const standCtrl = require("../Controller/standController");
const passport = require("passport");
const Roles = require('../model/role');
const {  inRole } = require("../security/Rolemiddleware");

router.post('/create',standCtrl.apiCreateStand)
router.get("/all", standCtrl.apiGetAllStand)
router.get("/getid/:id",standCtrl.apiGetStandById)
router.delete("/deletebyid/:id",standCtrl.apiDeleteStand)
router.put("/update/:id",standCtrl.apiUpdateStand)
module.exports = router;