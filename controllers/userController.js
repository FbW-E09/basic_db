// CRUD
const User = require('../model/userModel')
// (C)create and save data
exports.create_user = (req, res)=>{
    let newUser = new User(req.body)
    newUser.save((err, data)=>{
        if(err) throw err;
        res.json(data)
    })
}

// (R)read/find All data
// output: array of object   [{}, {}]
exports.all_users = (req, res) => {
    // step 01: decide which model or collection I want to read?
    // step 02(method 1): ModelName.find() to read all data from DB
    User.find((err, data)=> {
        if(err) throw err;
        res.json(data)
    })
}

// find 1 user by his/her Id: findById()
exports.get_user = (req, res)=> {
    const userId = req.body.id // Martin's id coming from somewhere/client
    User.findById(userId, (err, data)=> {
        if(err) throw err;
        res.json(data)
    })
}

// (U) update existing data: findByIdAndUpdate()
// who is going to be update?: userId
// what data need to be update?
exports.update_user = (req, res)=> {
    const userId = req.body.id 
    User.findByIdAndUpdate(userId, 
        {fullname: "Ather"}, // data to update
        {new: true}, // options
        (err, data)=>{
            if(err) throw err;
            res.json(data)
        })
}

// (D) remove some data
exports.delete_user = (req, res)=> {
    const userId = req.body.id 
    User.findByIdAndRemove(userId, 
        (err)=>{
            if(err) throw err;
            res.json("1 User has been deleted")
        })
}





