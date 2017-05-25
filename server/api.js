'use strict'
const api = require('express').Router()
const db = require('../db')
module.exports = api

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))
api.use('/campus', require('./app/routes/campus'));
api.use('/student', require('./app/routes/student'));

api.use(function(err, req, res, next){
	console.error(err, typeof next);
	console.error(err.stack)
	res.status(err.status||500).send(err.message||'Internal Server Error.')
})
