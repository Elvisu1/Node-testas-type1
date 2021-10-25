const express = require('express');
const {hashValue, verifyHash} = require('../../utils/hashHelper');
const {validateRegister} = require('../../utils/validateHelper');
const {dbAction} = require("../../utils/dbHelper");
// const mysql = require(`mysql2/promise`)


// const {dConfig} = require('../../config')

const router = express.Router();
// POST /users/register - create new user
router.post('/register',validateRegister, async (req, res)=> {
    const newUser = {
        user_name: req.body.user_name,
        email: req.body.email,
        password: hashValue(req.body.password),
    };
    const sql =`
    INSERT INTO users (full_name, email, password)
    VALUES (?,?,?)
    `;
    const dbResult = await dbAction(sql, [newUser.full_name, newUser.email, newUser.password])
    if (dbResult === false){
        return res.status(500).json({error:'something wrong'})
    }

    res.json({msg:'user registered', dbResult});

});

// validation

// user bcrypt

// POST/users/login

module.exports = router;
