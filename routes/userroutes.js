module.exports = function(app) {
    var userData = require('../controller/usercontroller');

    app.route('/signin')
    .post(userData.userSignin)
    .get(userData.getAllSignin)
}