const connection = require('./../config/connection');

    function getUser(){
        return connection.query('SELECT * FROM users ');
    }
    module.exports=getUser;