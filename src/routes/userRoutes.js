const express = require('express');
const router = express.Router();


router.post('/login', async (req,res) => {
    try{

    } catch (err) {
        res.json({ error: true, message: err.message})
    }
})



module.exports = router;