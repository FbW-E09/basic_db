const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
// router.httpMethod(path, callback)
// create a user
router.post('/create', userController.create_user)
// get all users
router.get('/all', userController.all_users)
// get 1 user by id
router.post('/id', userController.get_user)
// update by id
router.post('/update', userController.update_user)
// Remove by Id
router.post('/remove', userController.delete_user)

module.exports = router;