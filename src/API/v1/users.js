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

router.post('/login', async (req,res) =>{
    res.json('you are about to login');
});

module.exports = router;
