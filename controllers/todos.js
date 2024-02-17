

const model = require('../model/todos')
const Todo = model.Todo

exports.createTodo = (req,res)=>{
  const todo = new Todo(req.body)

  todo.save()
    .then( result => {
      console.log(result)
      res.status(201).json(result)
    })
    .catch( err => {
      console.log(err)
      res.status(201).json(err)
    })
}

exports.getTodos = async (req,res)=>{
  const todos = await Todo.find()
  res.json(todos)
}

exports.getTodo = async (req,res)=>{
  const id = req.params.id
  const todo= await Todo.findOne({_id:id})
  console.log(todo)
  res.json(todo)
}

exports.replaceTodo = async (req,res) => {
  const id = req.params.id
  try{
    const doc=await Todo.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  }
  catch (err){
    console.log(err)
    res.status(400).json(err)
  }
}

exports.updateTodo = async (req,res) => {
  const id=req.params.id
  try{
    const doc=await Todo.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  }
  catch (err){
    console.log(err)
    res.status(400).json(err)
  }
}

exports.deleteTodo = async (req,res)=>{
  const id = req.params.id
  try{
    const doc=await Todo.findOneAndDelete({_id:id})
    res.status(201).json(doc)
  }
  catch (err){
    console.log(err)
    res.status(400).json(err)
  }
}
