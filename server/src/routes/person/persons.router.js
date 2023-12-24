const express = require('express')

const {
    httpgetAllPersons,
    httpAddnewPersons,
    httpDeletePerson
} = require('./person.controller')

const personsRouter = express.Router()

personsRouter.get('/',httpgetAllPersons )
personsRouter.post('/',httpAddnewPersons )
personsRouter.delete('/:id', httpDeletePerson )

module.exports= personsRouter



