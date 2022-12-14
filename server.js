const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo DB Succesfully Connected");
})


// Routes Config

const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

const getdatatodbRouter = require("./routes/getdatatodb/timelydatacalls.js");
app.use("/getdata",getdatatodbRouter);

const customerRouter = require("./routes/customers/customerdetails.js");
app.use("/customer",customerRouter);




//  App Port declaration
app.listen(PORT, ()=> {
    console.log(`Server is Up and Running on Port : ${PORT}`);
})