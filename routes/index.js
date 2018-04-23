var express = require('express');
var router = express.Router();
var Schema = require('../models/employee');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/employee',function(req,res,next){

  //  res.send('Username: ' + req.body.Username);
    Schema.findOne({
    id: req.body.id
    },function(err,name){
      if(err)
      {
        console.log("error");

      res.send(err);
    }
      else {
        console.log("data");

  res.render('employee1',{title:"welcome"});
}

  });
 });


module.exports = router;
