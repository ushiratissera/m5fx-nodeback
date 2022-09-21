const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student ({
        name,
        age,
        gender
    })


    newStudent.save().then(()=>{
        res.json("Student Added Succesfully")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {name, age, gender} = req.body;
    
    const updateStudent = {
        name,
        age,
        gender
    }
    const update =  await Student.findByIdAndUpdate(userID,updateStudent).then(()=>{
        res.status(200).send({status: "User Updated "})}).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Erorr When Updating ", error : err.message})
        })
 
})

router.route("/delete/:id").delete(async (req,res)=>{
    let userID = req.params.id;

    await Student.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status: "User Deleted Successfully ", user : update})}).catch((err)=>{
            console.log(err);
        res.status(500).send({status: "Erorr When Deleting ", error : err.message})
    })
    
})


router.route("/get/:id").get(async (req,res)=>{
    let userID = req.params.id;

    const user = await Student.findById(userID).then((student)=>{
        res.status(200).send({status: "User Fetched", student})}).catch((err)=>{
            console.log(err);
        res.status(500).send({status: "Erorr when Getiing user ", error : err.message})
    })
    
})

router.route("/data/:id").get(async (req,res)=>{
    // let userID = req.params.id;
    const arr = [
    {
        id: 1,
        title: "USD/AUD",
        rate: "0.81%",
        change: {
            percentage: "1.2%",
            growth: "up",
            time: "than last week",
        },
         //chart: conversionChart1,
    },
    {
        id: 2,
        title: "UniqueTissera 123",
        rate: "5,137",
        change: {
            percentage: "0.7%",
            growth: "down",
            time: "than last week",
        },
        // chart: "conversionChart2",
    },
    {
        id: 3,
        title: "Newww",
        rate: "$306.20",
        change: {
            percentage: "0.3%",
            growth: "down",
            time: "than last week",
        },
        // chart: "conversionChart3",
    },
    {
        id: 4,
        title: "Order Quantity",
        rate: "1,650",
        change: {
            percentage: "2.1%",
            growth: "up",
            time: "than last week",
        },
        // chart: 'conversionChart4',
    },
    ]
    // const user = await Student.findById(userID).then((student)=>{
    //     res.status(200).send({status: "User Fetched", student})})
    //     .catch((err)=>{
    //         console.log(err);
    //     res.status(500).send({status: "Erorr when Getiing user ", error : err.message})
    // })

    res.status(200).send(arr);
    
})

module.exports = router;
