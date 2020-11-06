var express = require('express'); 
var router = express.Router();
var models = require("../models");
 
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function(req, res, next) {
    let body = req.body;
    
    if(body.email==""||body.password==""||body.username==""){
        res.redirect("/register");
    }

    models.User.create({
        userID: body.email,
        userPW: body.password,
        userName: body.username
    }).then( result => {
        alert("회원가입 완료!");
        console.log("회원가입 완료");
        res.redirect("/");
    }).catch(err => {
        alert("회원가입 실패!");
        console.log("회원가입 실패");
    })
});

module.exports = router;