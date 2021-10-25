const express = require('express');
const {hashValue} = require('../../utils/hashHelper');
const {validateRegister} = require('../../utils/validateHelper');
// const mysql = require(`mysql2/promise`)


// const {dConfig} = require('../../config')

const router = express.Router();
// POST /users/register - create new user
router.post('/register',validateRegister, async (req, res)=> {
    const newUser = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: hashValue(req.body.password),
    };

    res.json({msg:'register user here', newUser});

})

// validation

// user bcrypt

// POST/users/login

module.exports = router;
