const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
require("dotenv").config();



const {connection} = require('./db')
const router = require("./routes/api")
const app = express();
app.use(cors())
app.use(express.json());

let PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/api",router)

app.listen(PORT,async()=>{
    try {
        await connection 
        console.log("connected to db")
    } catch (error) {
        console.log("err in connect to db")
    }
    
    console.log("server is running at ", PORT)
})