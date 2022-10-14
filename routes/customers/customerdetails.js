const router = require("express").Router();
let Customer = require("../../models/customersmng/Customer");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const auth = require("../../middleware/auth");


const someDate = new Date('')

// Login -----------------



router.route("/login").post(async(req,res)=>{
    
    // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await Customer.findOne({ cus_email :email });

    if (user && (await bcrypt.compare(password, user.cus_password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here


});


//login End -----------------


// Welcome Start

router.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

//Welcome end

router.route("/register").post(async(req,res)=>{

    try {

    const name = req.body.name;
    let email = req.body.email;
    const mobileno = req.body.mobileno;
    const country = req.body.country;
    const address = req.body.address;
    const waytoknow = req.body.waytoknow;
    const password = req.body.password;

    email = email.toLowerCase();

    let objid ;

    // checking whether exsisiting customer with same email


    const oldUser = await Customer.findOne({ cus_email :email });

        if (oldUser) {
            console.log(oldUser);
        return res.status(409).send("User Already Exist. Please Login");
        }

    // checking user end
    
    // encrypting password starts here

    let encryptedPassword = await bcrypt.hash(password, 10);

    // encrypting password end

    const newCustomer = new Customer ({
        cus_name : name ,
        cus_email : email,
        cus_mobileno : mobileno,
        cus_country : country,
        cus_address : address,
        cus_waytoknow : waytoknow,
        cus_password : encryptedPassword
    })


    let abc = await newCustomer.save().then((dats)=>{
        
        objid = dats;
        //console.log(objid);
        res.json("Customer Added Succesfully")
        
    }).catch((err)=>{
        console.log(err);
    })

    // Generating Token

    const token = jwt.sign(
      { user_id: objid.id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    const updateToken = new Customer ({
        cus_token : token ,
    })
    let userid = objid.id;
    // inserting Token

    await Customer.updateOne({_id:userid}, { $set: {cus_token :token}}) 

    } catch (error) {

        console.log(error);
        
    }

    
})



// start of view profile


router.route("/view").get((req,res)=>{
    Customer.find().then((custm)=>{
        res.json(custm)
    }).catch((err)=>{
        console.log(err);
    })
})


// end of viewing profile



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
