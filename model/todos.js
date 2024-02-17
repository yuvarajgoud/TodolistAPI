
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  todo:{
    type:String,
    required:true
  },
  isCompleted:{
    type:Boolean,
    required:true
  }
})

exports.Todo = mongoose.model('Todo', todoSchema);