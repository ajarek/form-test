const router = require('express').Router()
router.get('/blad',(req,res)=>{
    res.render('blad')
})
module.exports=router