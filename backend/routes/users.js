const express = require('express')

const router = express.Router()

const User = require('../models/user')

const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/userController')

// GET all Users
router.get('/', getAllUsers)

// GET a single User
router.get('/:address', getUser)

// POST a new User
router.post('/', createUser)

//DELETE a User
router.delete('/:address', deleteUser)

//UPDATE a User
router.patch('/:address', updateUser)

module.exports = router