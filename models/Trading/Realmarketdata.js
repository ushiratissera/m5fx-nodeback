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
    reqtime : {
        type : String,
        required : true
    },
    prices : {
        type : Array,
        required : true
    },
    otherinf : {
        type : Array,
        required : false
    },
    

})

const Realmarketdata = mongoose.model("realmarketdata",realmarketdataSchema);

module.exports = Realmarketdata;