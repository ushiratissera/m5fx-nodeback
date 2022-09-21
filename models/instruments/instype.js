const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instypeSchema = new Schema({
    instype_name :{
        type : String,
        required : true
    },
    instype_code : {
        type : String,
        required : true
    },
    instype_desc :{
        type : String,
        required : false
    },
    instype_isactive :{
        type : Boolean,
        default : true,
    },
    instype_add01 : {
        type : String,
        required : false
    },
    instype_add02 : {
        type : String,
        required : false
    }

})

const InstrumentTypes = mongoose.model("InstrumentTypes",instypeSchema);

module.exports = InstrumentTypes;

