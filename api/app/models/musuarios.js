'user strict';
var sql = require('./db.js');

//User object constructor
var User = function(user){
    this.username = user.username;
};

User.getAllUsers= function (result) {
        sql.query("Select username from auth_user", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Usuario : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= User;