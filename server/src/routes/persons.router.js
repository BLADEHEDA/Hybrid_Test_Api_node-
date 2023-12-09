const express = require('express')

const {
    httpgetAllPersons,
    httpAddnewPersons
} = require('./person.controller')

const personsRouter = express.Router()

personsRouter.get('/',httpgetAllPersons )
personsRouter.post('/',httpAddnewPersons )

module.exports= personsRouter



