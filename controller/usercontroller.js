var mongoose = require('mongoose');
UserData = mongoose.model('UserInfo');

exports.getAllUsers = function(req, res) {
 console.log(req.body);
  UserData.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
    console.log(data);
  });
};

exports.getUser = function(req, res){
  console.log(req.params.emailId);    
  UserData.find({email: req.params.emailId},
    function(err, data){
      if (err)
      res.send(err);
      res.json(data);
      console.log(data);
    });
};

exports.userSignin = function(req, res){
    const reg_email=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(reg_email.test(req.body.Email)){
      console.log(req.body);
      UserData.find({Email: req.body.Email},function(err, data){
        if(data != null && data != ''){
          res.send('user login sucessfully');
        }
        else
        {
           res.send(req.body);       
        }
      });
    }
    else {
      res.send('Email is invalid');
    }
  };

  exports.getAllSignin = (function(req, res) {
    UserData.find( function(err, data) {
     if (err)
       res.send(err);
       res.json(data); 
    });
});
