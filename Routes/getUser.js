const express = require('express')
const router = express.Router()

const getUserController = require('../Controllers/getUser')
const getUserByIdController = require('../Controllers/getUserByID')
const updateUserByIdController = require('../Controllers/updateUserByID')

router.get('/alluser', getUserController)
router.get('/:id', getUserByIdController)
router.put('/update/:id', updateUserByIdController)

module.exports = router

