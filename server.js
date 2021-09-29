const express =require('express')
const mongoose=require('mongoose')

const {port,database}=require('./config')

const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
//routes
app.use(require('./routes/login'))
app.use(require('./routes/compose'))
app.use(require('./routes/alert'))
app.use(require('./routes/index'))
app.use(require('./routes/incorrectData'))
app.use(require('./routes/blad'))
app.use(require('./routes/home'))

app.listen(port, () => {
    console.log('Server started listening:'+ port);
})