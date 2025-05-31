const Todo= require('../models/todo')
exports.getRoute=async(req,res)=>{
    const todoList = await Todo.find();
    res.json(todoList)
}
exports.getByIdRoute=async(req,res)=>{
    const Task = await Todo.findById(req.params.id);
    res.json(Task)
}
exports.postRoute=async(req,res)=>{
    const {task}=req.body
    const newTask = new Todo({task})
    await newTask.save();    
    res.status(201).json({
        message:"Task Added Successfully",
        task:newTask
    })
}
exports.putRoute=async(req,res)=>{
    const update=await
Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update){
        return res.status(404).send('id not found')
    }
    res.status(201).send(update)
}
exports.patchRoute=(req,res)=>{
    res.json({
        message:"Patch request working"
    })
}
exports.deleteRoute=(req,res)=>{
    res.json({
        message:"Delete request working"
    })
}