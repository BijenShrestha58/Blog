const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>
{
    res.send("<h2>Hello World</h2>");
});

router.get('/test',(req,res)=>{
    res.send("<h2>This is a test route</h2>")
});


module.exports = router;