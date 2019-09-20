var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  UserName:{
    type:String,
    required:'please Enter valid name'
  },
  Email: {
    type: String,
    required: 'Please Enter valid emailId'
  },
  Age: {
    type: String,
    required: 'Please Enter the age,minimum 18'
  }
});

module.exports = mongoose.model('UserInfo', UserSchema);