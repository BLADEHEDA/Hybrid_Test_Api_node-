const {
    getAllPersons,addnewPerson
} = require('../models/persons.model');

function httpgetAllPersons(req,res){
return res.status(200).json(getAllPersons())
}

//function to hangle the post request
function httpAddnewPersons(req,res){
    const person = req.body

    addnewPerson(person)
   return res.status(201).json(person)
}

module.exports={
    httpgetAllPersons,
    httpAddnewPersons
}


