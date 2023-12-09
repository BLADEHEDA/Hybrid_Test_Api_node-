const express = require('express')
const {httpgetAlltodos,
}= require('./todos.controller')

const todosRouter= express.Router()
todosRouter.get('/todos',httpgetAlltodos)

 module.exports =todosRouter