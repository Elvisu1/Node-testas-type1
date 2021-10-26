const express = require('express');
const {hashValue, verifyHash} = require('../../utils/hashHelper');
const {validateRegister, validateLogin} = require('../../utils/validateHelper');
const {dbAction, dbFail, dbSuccess} = require("../../utils/dbHelper");
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config')
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
    const sql =`
    INSERT INTO users (full_name, email, password)
    VALUES (?,?,?)
    `;
    const dbResult = await dbAction(sql, [newUser.full_name, newUser.email, newUser.password])
    if (dbResult === false){
        return res.status(500).json({error:'something wrong'})
    }
if(dbResult.affectedRows === 1){
    return res.json({msg:'user registered', newUser: newUser.email});
}
    console.log('no rows affected');
     res.status(500).json({error:'something wrong'});

});

// POST /users/login - login existing user

router.post('/login',validateLogin, async (req,res) =>{
const sql = 'SELECT * FROM users WHERE email = ?';
const dbResult = await dbAction(sql,[req.body.email]);
    // check email
    if(dbResult.length !==1){
        return dbFail(res, 'email does not exist', 400)
    }
    // check password
    if (!verifyHash(req.body.password, dbResult[0].password)){
        return dbFail(res, 'password not match')
    }
    const token = jwt.sign({email: req.body.email}, jwtSecret);
    console.log('token', token)
    const loggedUser = {
        email: req.body.email,
        token: token,
    }
    dbSuccess(res,loggedUser);

});

module.exports = router;
