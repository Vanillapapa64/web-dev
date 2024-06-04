const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://navkirat:lKPHwhG7MHLFQ6dQ@cluster0.5kr9apv.mongodb.net/")
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo',todoschema)
module.exports={
    todo
}