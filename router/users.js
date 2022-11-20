const express = require('express')
const router = express.Router()

const usercontrollers = require('../controller/user')

// READ
router.get('/users', usercontrollers.index)

// READ BY ID
router.get('/users/:id', usercontrollers.show)

// CREATE
router.post('/users', usercontrollers.store)
  
// UPDATE
router.put('/users/:id', usercontrollers.update)
  
// DELETE
router.delete('/users/:id', usercontrollers.delete)

module.exports = router;