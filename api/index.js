const express = require('express')
const path = require('path')
require('dotenv').config({path:path.resolve('../.env')})

const nodemailer = require('nodemailer');
const ses  =require('nodemailer-ses-transport');
const aws = require('aws-sdk');
const cors =require("cors")
const Port = 5000

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
aws.config.loadFromPath('./awsconfig.json')
const transport = nodemailer.createTransport(ses({
   host: 'email-smtp.ap-south-1.amazonaws.com',
   port: 2525,
   auth:{
        user:process.env.USER,
        pass: process.env.PASS       
   }
}));
app.get('/api',(req,res)=>{
    return res.send('API Status: Running')
})

app.post('/api/email', async (req,res)=>{
    // console.log(req.body)
    const message ={
        from: 'swadhin.routray@gmail.com',
        to: 'routrayswadhin10@gmail.com',
        subject: "Portfolio Message from: "+ req.body.name,
        text: req.body.message + '\n From: '+ req.body.email
    };
    await transport.sendMail(message, (err,info)=>{
        if(err){
            console.log(err)
            return res.send({success:false})

        }
        else{
            console.log("Message sent" + info);
            return res.send({success:true});
        }

    })
    
})
app.listen(Port,err=>{
    if(err){
        return console.error(err)
    }
    return console.log(`API running on Port: ${Port}`)
})