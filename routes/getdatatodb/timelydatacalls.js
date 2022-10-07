const router = require("express").Router();
let realmarketdata = require("../../models/Trading/Realmarketdata");
const schedule = require('node-schedule');
const axios = require('axios').default;

const someDate = new Date('');

router.route("/").get((req,res)=>{

  let pricearr = ['{"name":"Ushira", "age":30, "car":null}','{"name":"Tissera", "age":30, "car":null}'];

  const newmarketdata = new realmarketdata ({
        timestamp : 2022-01-22,
        tframe : "1099",
        source : "abccc",
        dbver : "v22",
        tfdframe : "m15",
        prices : pricearr,
        otherinf : "222"
    })

console.log("abc");

newmarketdata.save().then(()=>{
        res.json("Realtime Data Succesfully")
    }).catch((err)=>{
        console.log(err);
    })

})
// schedule.scheduleJob('* * * * *', ()=>{
//     console.log('I ran .......')
// 

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);



module.exports = router;
