const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type :String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    ,roles :{
        type : String,
        enum : ['RES','REQ','RESREQ'],
        required : true 
    }
});

module.exports =  mongoose.model("User",UserSchema,);