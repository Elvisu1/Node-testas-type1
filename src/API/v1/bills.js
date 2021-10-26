const express = require('express');

// const {validateRegister} = require('../../utils/validateHelper');

const {dbAction, dbFail, dbSuccess} = require("../../utils/dbHelper");


const router = express.Router();

router.post('/new', async (req,res)=>{
    const sql = `INSERT INTO bills (amount, description, group_id ) VALUES (?,?,?)`;
    const {amount, description, group_id} = req.body;
    const dbResult = await dbAction(sql, [amount, description, group_id])
    if (dbResult === false){
        return res.status(500).json({error:'sideways'})
    }

    res.json({msg: "bill added", dbResult });
})



module.exports = router;
