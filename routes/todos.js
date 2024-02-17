
const express = require('express')
const router = express.Router()
const controller = require ('../controllers/todos')


router
  .post('/',controller.createTodo)
  .get('/',controller.getTodos)
  .get('/:id',controller.getTodo)
  .put('/:id',controller.replaceTodo)
  .patch('/:id',controller.updateTodo)
  .delete('/:id',controller.deleteTodo)

exports.router = router