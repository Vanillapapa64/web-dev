const express=require("express")
const app=express();
app.use(express.json());
const {createtodo,updatetodo} = require('./types')
const {todo}=require('./db')
const cors=require('cors')
app.use(cors())
app.get('/todos',async(req,res)=>{
    const todos=await todo.find({})
    res.json({todos})
})
app.post('/todos',async(req,res)=>{
    const createpayload=req.body;
    const parsedpayload=createtodo.safeParse(createpayload);
    if (!parsedpayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})
app.put('/completed',async(req,res)=>{
    const updatetodopayload=req.body;
    const parsedpayload=updatetodo.safeParse(updatetodopayload);
    if (!parsedpayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"updated"
    })
})
app.listen(3000)