var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
UserData = require('./model/usermodel'); 

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/userroutes'); 
routes(app);

app.set('port', (process.env.port || 3001));

app.listen(app.get('port'), function(){
    console.log("server started on port" + app.get('port'));
})