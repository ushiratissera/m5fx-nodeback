const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cus_name :{
        type : String,
        required : true
    },
    cus_email : {
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
        required : false
    },
    cus_joindate : {
        type : String,
        default : Date.now,
        required : false
    },
    cus_packageid :{
        type : String,
        required : true
    },
    cus_selectedinsttype : {
        type : String,
        required : true
    },
    cus_yearormonth :{
        type : String,
        required : true
    },
    cus_lastlogindt : {
        type : String,
        required : true
    },
    cus_lastloginip :{
        type : String,
        required : true
    },
    cus_isactive : {
        type : Boolean,
        default : true,
        required : false
    },
    cus_ispaid :{
        type : Boolean,
        required : true
    },
    cus_isemailconfirm : {
        type : Boolean,
        default : false,
        required : false
    },
    cus_isemailconfirm : {
        type : Boolean,
        default : false,
        required : true
    }

})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer;

