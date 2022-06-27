const express = require('express'); 
const app = express();
const PORT = 5000;
require('dotenv').config();
const PE = process.env;

/**
 * How to connect database using mongoose?
 * step 1: install: npm i mongoose
 * step 2: connect with your mongodb atlas account
 * step 3: hide credential info using dotenv
 * step 4: create a Object Model(OM) for some data using "Schema" concept
 * step 05: save something in database(DB)
 */
const mongoose = require('mongoose')
// connecting to DB
mongoose
.connect(`mongodb+srv://${PE.DB_USER}:${PE.DB_USER_PASSWORD}@arifdci.fvkse.mongodb.net/${PE.DB_NAME}`)
.then(()=> {
    console.log('Database(DB) is connected successfully with port 27017')
})
.catch(error=> console.log(error))

// Save user data
/**
 * step 01: Import model
 */
const User = require('./model/user')
app.use(express.json())
// Routes to save data
app.post('/create/user', (req, res)=>{
    // step 02: create an Schema object with data
    let newUser = new User({
        fullname: req.body.fullname,
        country: req.body.country,
        age: 32,
        gender: ""
    })
    // step 03: Save this data
    newUser.save((err, data)=>{
        res.json(data)
    })
})


app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
