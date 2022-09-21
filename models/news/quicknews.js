const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quicknewsSchema = new Schema({
    nw_title :{
        type : String,
        required : true
    },
    nw_description : {
        type : String,
        required : true
    },
    nw_category : {
        type : String,
        required : true
    },
    nw_datetime : {
        type : String,
        default : Date.now,
        required : true
    },
    nw_source : {
        type : String,
        required : false
    },
    nw_relatedcurreny : {
        type : String,
        required : false
    },
    nw_image : {
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

const Quicknews = mongoose.model("News",quicknewsSchema);

module.exports = Quicknews;
