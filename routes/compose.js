const router = require('express').Router()
const List = require('../models/Form')

router.get('/compose',(req,res)=>{
    res.render('rejestr')
})
.post('/compose',(req,res)=>{
    const{username,email,password}=req.body
    if(!username || !email || !password)
     return res.send('Plese enter the required credetnials!')
    
     const newList =new List({username,email,password})
     newList.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/alert')
     })
     .catch(err=>console.log('err'))
})
module.exports=router