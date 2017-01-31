var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Skills = require('../models/skills');
var Question = require('../models/question');
var bodyParser = require('body-parser');

router.get('/admin',function (req,res) {
  res.render("./admin");
});

router.get('/admin/createUser',function(req,res) {
  res.render('./admin/createUser');
});

router.get('/admin/updateUser',function(req,res) {
  res.render('./admin/updateUser');
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

//create a employee user and redirect to somewhere
router.post('/admin/createUser',function(req,res) {
    User.create(req.body.user,function(err,newUser){
      if(err) {
        res.redirect("/admin");
      } else {
        req.flash("success", "The resgistration successful!");
        res.redirect("/admin/createUser");
      }
    });
});



router.put('/admin/updateUser',function(req,res) {
  var user = req.body.user;
  console.log(user);
  User.findOneAndUpdate({_id:req.body.user._id},req.body.user,function(err,user) {
    if(err) {
      req.flash("error","error");
      console.log(err);
    } else {
      console.log("found " + user);
      req.flash("success", "The personal Information updated successful!");
      res.redirect("/admin/readUser");
    }
  });
});

router.get('/admin/updateUser/:id',function(req,res) {
  //find the user with providing id
  User.findById(req.params.id,function(err,foundUser) {
    if(err) {
      console.log(foundUser);
    } else {
      res.render("./admin/updateUser",{foundUser:foundUser});
    }
  });
});


router.get('/admin/deleteUser',function(req,res) {
  res.render('./admin/deleteUser');
});

//skill module

//read all skills
router.get('/admin/readSkill',function(req,res) {
  res.render('./admin/readSkill');
});

//to create a skill
router.get('/admin/createSkill',function(req,res) {
  res.render("./admin/createSkill");
});


router.delete('admin/readSkill/:id',function(req,res) {
  res.send("this is delete page");
});

module.exports = router;
