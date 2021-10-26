const express = require('express');

// const {validateRegister} = require('../../utils/validateHelper');

const {dbAction, dbFail, dbSuccess} = require("../../utils/dbHelper");


const router = express.Router();

router.post('/new', async (req,res)=>{
    const sql = `INSERT INTO groups (id, name ) VALUES (?,?)`;
    const {id, name} = req.body;
    const dbResult = await dbAction(sql, [id, name])
    if (dbResult === false){
        return res.status(500).json({error:'sideways'})
    }
    res.json({msg: "group created", dbResult });
})
/// all groups
router.get('/all', async (req,res)=>{
    const sql = `
    SELECT groups.id, groups.name
    FROM groups
    `;
    const dbResult = await dbAction(sql);
    if (dbResult === false) return dbFail(res);
    dbSuccess(res,dbResult)

});


module.exports = router;
