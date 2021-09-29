const router = require('express').Router()
router.get('/alert',(req,res)=>{
    res.render('rejestrAlert')
})
module.exports=router
