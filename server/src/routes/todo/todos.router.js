const express = require('express')
const {httpgetAlltodos,
}= require('./todos.controller')

const todosRouter= express.Router()
todosRouter.get('/',httpgetAlltodos)

 module.exports =todosRouter