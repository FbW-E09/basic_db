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
 * step 5: save something in database(DB)
 */
const mongoose = require('mongoose')
// connecting to DB
mongoose
.connect(`mongodb+srv://${PE.DB_USER}:${PE.DB_USER_PASSWORD}@arifdci.fvkse.mongodb.net/${PE.DB_NAME}`)
.then(()=> {
    console.log('Database(DB) is connected successfully with port 27017')
})
.catch(error=> console.log(error))
app.use(express.json())

// routes to use
const userRouter = require('./routes/userRouter')
app.use('/user', userRouter)

app.listen(PORT, (req, res)=> {
    console.log('Start...Server is running successfully on port ' + PORT)
});
