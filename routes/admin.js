var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/admin',function (req,res) {
  res.render("./admin");
});

router.get('/admin/createUser',function(req,res) {
  res.render('./admin/createUser');
});

router.get('/admin/readUser',function(req,res) {
  res.render('./admin/readUser');
});

router.get('/admin/updateUser',function(req,res) {
  res.render('./admin/updateUser');
});

router.get('/admin/deleteUser',function(req,res) {
  res.render('./admin/deleteUser');
});

router.get('/admin/readSkill',function(req,res) {
  res.render('./admin/readSkill');
});

module.exports = router;
