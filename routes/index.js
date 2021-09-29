 const router = require('express').Router()
 const Form= require('../models/Form')
const pass= []
const passBase= []


  

router.post('/index',(req,res)=>{
    const {username,email,password} =req.body
    const newUser= {username,email,password}
    pass.unshift(newUser.password);
    res.redirect('/incorrectData')
})
.get('/incorrectData',async(req,res)=>{
    //$and:[{'password':'123'},{'username':'ajarek'}]
    const allForm=await Form.findOne({'password':pass[0]})
   
  if(allForm){
    res.redirect('/home')
  console.log(allForm);       
  console.log('zalogowano')
  }
   else{
    res.redirect('/blad')
   }
    });
module.exports=router
