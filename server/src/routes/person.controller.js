const {
    getAllPersons,addnewPerson
} = require('../models/persons.model');

function httpgetAllPersons(req,res){
return res.status(200).json(getAllPersons())
}

//function to hangle the post request
function httpAddnewPersons(req,res){
    const person = req.body

    //validate the fields 
    if(!person.personName || !person.age || !person.occupation || !person.residence ){
        return res.status(400).json({
            error: 'missing property  '
        })
    }
    if(isNaN(person.age)){
        return res.status(400).json({
            error:'Age must be a number'
        })
    }

    addnewPerson(person)
   return res.status(201).json(person)
}

module.exports={
    httpgetAllPersons,
    httpAddnewPersons
}


