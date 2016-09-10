const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    }
    ,creationDate :{
        type : Date,
        default : Date.now
    },
    expectedDate :{
        type : Date,
        required : true
    },
    deliveryDate :{
        type : Date,
        required : true
    },
    difficulty :{
        type : String,
        enum : ['EASY','NORMAL','HARD'],
        default : 'EASY'
    },
    priority :{
        type : String,
        enum : ['LOW','NORMAL','HIGH'],
        default : 'LOW'
    },
    requester :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    responsibles :{
        type : [mongoose.Schema.Types.ObjectId],
        required : true,
        ref : 'User'
    }
});


module.exports = mongoose.model('Task',TaskSchema);
