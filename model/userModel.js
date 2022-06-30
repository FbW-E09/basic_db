/**
 * step 01: define a Schema
 * step 02: make a model
 * step 03: export the model
 */
// import mongoose and schema
const mongoose = require('mongoose')
const { Schema } = mongoose
// const Schema = mongoose.Schema;

// Define User Schema
// const nameOfSchema = new Schema(Object map)
const userSchema = new Schema({
    fullname: String, 
    country: String, 
    age: Number, 
    height: Number, 
    weight: Number, 
    gender: String
})

// Create a Model
const User = mongoose.model('User', userSchema)

// export model
module.exports = User;