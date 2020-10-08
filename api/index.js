const express = require('express')
const path = require('path')
require('dotenv').config({path:path.resolve('../.env')})

const nodemailer = require('nodemailer');
const ses  =require('nodemailer-ses-transport');
const aws = require('aws-sdk');
const cors =require("cors")
const Port =process.env.PORT || 5000

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
aws.config.update({
    apiVersion:'2010-12-01',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey:process.env.SECRET_ACESS_KEY,
    region: 'us-west-2'
});
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
    console.log(req.body)
    const message ={
        from: req.body.email,
        to: 'swadhin.routray@gmail.com',
        subject: "Portfolio",
        text: req.body.message
    };
    await transport.sendMail(message, (err,info)=>{
        if(err){
            console.log(err)
            return res.send({success:false})

        }
        else{
            console.log("Message sent" + info);
        }
        
    })
    console.log("Sent")
    return res.send({success:true})
    
})
app.listen(Port,err=>{
    if(err){
        return console.error(err)
    }
    return console.log(`API running on Port: ${Port}`)
})