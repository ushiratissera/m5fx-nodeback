const router = require("express").Router();
let realmarketdata = require("../../models/Trading/Realmarketdata");
const schedule = require('node-schedule');
const axios = require('axios').default;

const someDate = new Date('');

// schedule.scheduleJob('* * * * *', ()=>{
//     console.log('I ran .......')
// })

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);


//     const newmarketdata = new realmarketdata ({
//         timestamp,
//         tframe : "1099",
//         source,
//         dbver,
//         tfdframe,
//         prices,
//         otherinf
//     })


//     newmarketdata.save().then(()=>{
//         res.json("Student Added Succesfully")
//     }).catch((err)=>{
//         console.log(err);
//     })

//   })
//   .catch(function (error) {
//     // handle error
//    console.log(error);
//   })
//   .then(function () {
//     //console.log (" Alwaysdone ");
//   });
// })

router.route("/").get((req,res)=>{
   const newmarketdata = new realmarketdata ({
        timestamp,
        tframe : "1099",
        source,
        dbver,
        tfdframe,
        prices,
        otherinf
    })


    newmarketdata.save().then(()=>{
        res.json("Student Added Succesfully")
    }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })



module.exports = router;
