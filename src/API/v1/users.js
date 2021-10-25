const express = require('express');
const mysql = require(`mysql2/promise`)

const {dConfig} = require('../../config')

const router = express.Router();
// POST /users/register - create new user
router.post('/register', async (req, res)=> {
    res.json('register user here')
})

// validation

// user bcrypt

// POST/users/login

module.exports = router;
