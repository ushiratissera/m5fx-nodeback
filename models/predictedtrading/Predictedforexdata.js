const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const predforexdataSchema = new Schema({
    predata_insid :{
        type : String,
        required : true
    },
    predata_instframe : {
        type : String,
        required : true
    },
    predata_insdatetime : {
        type : String,
        required : true
    },
    predata_inopen : {
        type : String,
        required : false
    },
    predata_inhigh : {
        type : String,
        required : false
    },
    predata_inlow : {
        type : String,
        required : false
    },
    predata_insclose : {
        type : String,
        required : false
    }
    ,
    predata_insvalue : {
        type : String,
        required : false
    }
    ,
    predata_insvolume : {
        type : String,
        required : false
    },
    predata_inscother : {
        type : String,
        required : false
    }

})

const PredforexData = mongoose.model("PredForexData",predforexdataSchema);

module.exports = PredforexData;

