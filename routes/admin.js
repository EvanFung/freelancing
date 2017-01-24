var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bodyParser = require('body-parser');
router.get('/admin',function (req,res) {
  res.render("./admin");
});

router.get('/admin/createUser',function(req,res) {
  res.render('./admin/createUser');
});

router.get('/admin/readUser',function(req,res) {
  User.find({},function(err,users) {
    if(err) {
      console.log(err);
    } else {
      res.render('./admin/readUser',{users:users});
    }
  });
});

router.delete('/admin/readUser',function(req,res) {
  var userid = req.body.user_id;
  User.findOneAndRemove({_id:userid},function(err,user) {
    console.log(user + "has been removed");
    res.redirect("/admin/readUser");
  });
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
