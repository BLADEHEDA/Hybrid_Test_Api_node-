const {getAllPersons} = require('../models/persons.model');

function httpgetAllPersons(req,res){
return res.status(200).json(getAllPersons())
}

module.exports={
    httpgetAllPersons,
}


