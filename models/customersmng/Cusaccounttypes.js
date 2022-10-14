const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cusacctypesSchema = new Schema({
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

})

const Customer = mongoose.model("",cusacctypesSchema);

module.exports = Customer;
