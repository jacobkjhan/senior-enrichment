'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
  	type: Sequelize.STRING
  },
  image: {
  	type: Sequelize.STRING
  }
})

//needs to be assigned to a campus
