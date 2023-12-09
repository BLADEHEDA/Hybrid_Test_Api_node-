const express = require('express')

const {httpgetAllPersons,} = require('./person.controller')

const personsRouter = express.Router()
personsRouter.get('/persons',httpgetAllPersons )

module.exports= personsRouter



