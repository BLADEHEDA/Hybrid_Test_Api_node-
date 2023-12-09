const express = require('express'); 
const cors = require('cors')
const mordan = require('morgan')

const todosRouter= require('./routes/todos.router')
 const personsRouter= require('./routes/persons.router')

const app= express()

app.use(cors())
app.use(express.json())

app.use(todosRouter)
 app.use(personsRouter)
 app.use(mordan('dev'))

module.exports= app
