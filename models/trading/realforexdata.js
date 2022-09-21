const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const realforexdataSchema = new Schema({
    rfdata_insid :{
        type : String,
        required : true
    },
    rfdata_instframe : {
        type : String,
        required : true
    },
    rfdata_insdatetime : {
        type : String,
        required : true
    },
    rfdata_inopen : {
        type : String,
        required : false
    },
    rfdata_inhigh : {
        type : String,
        required : false
    },
    rfdata_inlow : {
        type : String,
        required : false
    },
    rfdata_insclose : {
        type : String,
        required : false
    }
    ,
    rfdata_insvalue : {
        type : String,
        required : false
    }
    ,
    rfdata_insvolume : {
        type : String,
        required : false
    },
    rfdata_inscother : {
        type : String,
        required : false
    }

})

const RealforexData = mongoose.model("RealForexData",realforexdataSchema);

module.exports = RealforexData;

