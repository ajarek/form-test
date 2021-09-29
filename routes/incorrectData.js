const router = require('express').Router()
router.get('/incorrectData',(req,res)=>{
    res.render('incorrectData')
})
module.exports=router