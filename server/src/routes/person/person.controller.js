const {
    getAllPersons,addnewPerson,existPersonWithId,DeletePersonbyId
} = require('../../models/persons.model');

//fucntion to handle GET request 
function httpgetAllPersons(req,res){
return res.status(200).json(getAllPersons())
}

//function to handle the post request
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

// function to handle the delete requests
function httpDeletePerson(req,res){
    const personId = Number(req.params.id)

    if(!existPersonWithId(personId)){
        return res.status(400).json({
            error:'Person not found'
        })
    }
    const deleted = DeletePersonbyId(personId)
    return res.status(200).json(deleted)

}


module.exports={
    httpgetAllPersons,
    httpAddnewPersons,
    httpDeletePerson
}


