const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientsentiment = new Schema({
    cls_symbol :{
        type : String,
        required : true
    },
    cls_date : {
        type : String,
        required : true
    },
    cls_signal : {
        type : String,
        required : true
    },
    cls_netlong : {
        type : String,
        default : Date.now,
        required : true
    },
    cls_netshort : {
        type : String,
        required : false
    },
    cls_chlongs : {
        type : String,
        required : false
    },
    cls_chshorts : {
        type : String,
        required : false
    },
    nw_add1 : {
        type : String,
        required : false
    },
    nw_add2 : {
        type : String,
        required : false
    }

})

const ClientSentiment = mongoose.model("ClientSentiment",clientsentiment);

module.exports = ClientSentiment;
