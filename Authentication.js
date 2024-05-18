const express= require("express");
const app = express();
const bodyparser=require('body-parser')
app.use(bodyparser.json());
app.listen(3000)
var data=[]
app.post('/signup',(req,res)=>{
    const newuser={
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        uniqueid:Math.floor(Math.random()*1000)
    }
    const found= data.find(t=>t.username===req.body.username)
    if (!found){
        data.push(newuser)
        res.status(201).send()
    } else {
        res.status(400).send()
    }
})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const index = data.findIndex(t=>  t.username===req.body.username);
    if (index===-1){
        res.send(401).send()
    }else{
        if (data[index].password===req.body.password){
        res.send(200).json(data[index].firstname,data[index].uniqueid)
        } else{
        res.status(401).send()
        }
    }
})
app.get('/data',(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password;
    const index = data.findIndex(t=>  t.username===req.body.username);
    if (index===-1){
        res.status(401).send()
    }else{
        if (data[index].password===req.headers.password){
            res.json(data[index])
        }else{
            res.status(401).send()
        }
    }
})