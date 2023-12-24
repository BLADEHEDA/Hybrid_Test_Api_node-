const  {getAllTodos} = require('../../models/todos.model') 

function httpgetAlltodos(req,res){
  return  res.status(200).json(getAllTodos())
}

module.exports= {
  httpgetAlltodos
}