const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    ins_name :{
        type : String,
        required : true
    },
    ins_type : {
        type : String,
        required : true
    },
    ins_code : {
        type : String,
        required : true
    },
    ins_desc : {
        type : String,
        required : true
    },
    ins_add1 : {
        type : String,
        required : false
    },
    ins_add2 : {
        type : String,
        required : false
    }

})

const Instruments = mongoose.model("Instruments",instrumentSchema);

module.exports = Instruments;

