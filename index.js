require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app=express()

const todoRouter = require('./routes/todos')

//Middle Wares
app.use(cors())
app.use(express.json())
app.use('/todos',todoRouter.router)

app.get('/',(req,res)=>{
  res.json({name:"Yuvaraj"})
})

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(`mongodb+srv://yuvarajgoud:${process.env.DB_PASSWORD}@cluster0.max3jj3.mongodb.net/ecommerce`);
  console.log('Database Connected')
  console.log(process.env.DB_PASSWORD)
}



app.listen(process.env.PORT_NUMBER)


