const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cus_name :{
        type : String,
        required : true
    },
    cus_email : {
        type : String,
        unique: true,
        required : true
    },
    cus_password : {
        type : String,
        required : true
    },
    cus_mobileno :{
        type : String,
        required : true
    },
    cus_country : {
        type : String,
        required : true
    },
    cus_address :{
        type : String,
        required : true
    },
    cus_waytoknow : {
        type : String,
        required : false
    },
    cus_profilepic :{
        type : String,
        default : "0",
        required : false
    },
    cus_joindate : {
        type : String,
        default : Date.now,
        required : false
    },
    cus_packageid :{
        type : String,
        default : "0",
        required : true
    },
    cus_selectedinsttype : {
        type : String,
        default : "0",
        required : true
    },
    cus_yearormonth :{
        type : String,
        default : "0",
        required : true
    },
    cus_lastlogindt : {
        type : String,
        default : Date.now,
        required : true
    },
    cus_lastloginip :{
        type : String,
        default : "0",
        required : true
    },
    cus_isactive : {
        type : Boolean,
        default : true,
        required : false
    },
    cus_ispaid :{
        type : Boolean,
        default : false,
        required : true
    },
    cus_isemailconfirm : {
        type : Boolean,
        default : false,
        required : false
    },
    cus_nextpdate : {
        type : String,
        default : "0",
        required : true
    },
    cus_other : {
        type : String,
        default : "0",
        required : false
    },
    cus_token : {
        type : String,
        default : "0",
        required : true
    }

})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;

