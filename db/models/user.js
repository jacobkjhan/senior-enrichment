'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: {
  	type: Sequelize.STRING
  },
  email: {
  	type: Sequelize.STRING
  }
})

//needs to be assigned to a campus
