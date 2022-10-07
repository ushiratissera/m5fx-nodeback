const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const realmarketdataSchema = new Schema({
    timestamp :{
        type : Date,
        required : true
    },
    tframe : {
        type : String,
        required : true
    },
    source : {
        type : String,
        required : true
    },
    dbver : {
        type : String,
        required : true
    },
    tfdframe : {
        type : String,
        required : true
    },
    prices : {
        type : Array,
        required : true
    },
    otherinf : {
        type : Object,
        required : true
    },
    

})

const Realmarketdata = mongoose.model("Realmarketdata",realmarketdataSchema);

module.exports = Realmarketdata;