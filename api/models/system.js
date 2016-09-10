const mongoose = require('mongoose');

const SystemSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('System',SystemSchema);