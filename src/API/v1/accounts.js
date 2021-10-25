const express = require('express');

// const {validateRegister} = require('../../utils/validateHelper');
const {dbAction} = require("../../utils/dbHelper");

const router = express.Router();

router.post('/new', async (req,res)=>{
    const sql = `INSERT INTO accounts (group_id, user_id ) VALUES (?,?)`;
    const {group_id, user_id} = req.body;
    const dbResult = await dbAction(sql, [group_id, user_id])
    if (dbResult === false){
        return res.status(500).jason({error:'sideways'})
    }
    res.json({msg: "post created", dbResult });
})

module.exports = router;



