const router = require("express").Router();
let realmarketdata = require("../../models/Trading/Realmarketdata");
const schedule = require('node-schedule');
const { Promise } = require("mongoose");
const axios = require('axios').default;
const AsyncFunction = (async function () {}).constructor;


const someDate = new Date('');

router.route("/api").get((req,res)=>{

  const apikey = '2LlbosGh_bRQN4CuPH8C';
  
  const datetime = '2021-11-12-09:30' ;
  let sliceddate = datetime.slice(0, 10);
  let slicedtime = datetime.slice(11, 16);
  let timestampfordb = sliceddate+"T"+slicedtime+":00.000+00:00" ;
  const currecnyarr = ["EURUSD","GBPUSD"];

  const waittimer = currecnyarr.length*1000; // seconds of waiting time for the axios to get all details from api 700ms per 1
  console.log(waittimer);
  let pricearr =  [];
// async function start

function sendreqtoapi() {


  return new Promise(resolve => {

    currecnyarr.forEach((item, index, array) => {

    const inscurrency = item;

    const url = `https://marketdata.tradermade.com/api/v1/hour_historical?currency=${inscurrency}&api_key=${apikey}&date_time=${datetime}` ;
    //gmt issue with the request 
    

  axios.get(url)
  .then(response => {
    console.table(response.data);
    let recvdata = response.data;
    //price data schema
    let tempdata = {"insid":recvdata.currency,"instype":recvdata.currency,"inscode":recvdata.currency, "insclose":recvdata.close, "inshigh":recvdata.high,"inslow":recvdata.low,"insopen":recvdata.open,"insvalue":recvdata.close} ;

    pricearr.push(tempdata);

  })
  .catch(error => {
    console.log(error);
  })

  });


      setTimeout(() => {
        console.log('Data receiving with '+waittimer+' milleseconds Timeout ......');
        console.table(pricearr);
        resolve('Data Completely recived data from API ..........');
         
      }, waittimer);

        // Data recieving completed

  });

}

function senddatatodb(){

  return new Promise(resolve => {
// data processing start
  console.log(" Data Insertion start");
  //console.log(pricearr);

  let date = timestampfordb;
  let tframe = "1H";
  let source = "Trade Made seconds API";
  let dbver = "v1";
  let otherinfo = "erro 3 fixed";
  let reqtime = "time the request sent"


  const newmarketdata = new realmarketdata ({
        timestamp : date,
        tframe : tframe,
        source : source,
        dbver : dbver,
        reqtime : reqtime,
        prices : pricearr,
        otherinf : otherinfo
    })


 newmarketdata.save().then(()=>{

        res.json("Realtime Data Added Succesfully")
        resolve('Data Added from API to the database ..........');
    }).catch((err)=>{
        console.log(err);
    })

    });
}



async function asyncCall() {

  console.log('Requesting data from API ..');

  const result = await sendreqtoapi();
  const dbresult = await senddatatodb();

  console.log(result);
  console.log(dbresult);
  
}


asyncCall();


// end of async function


  //let pricearrold = ['{"name":"Ushira", "age":30, "car":null}','{"name":"Tissera", "age":30, "car":null}'];

})



// schedule.scheduleJob(' * * * * *', ()=>{
//     console.log('I ran .......')
// 

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);



module.exports = router;
