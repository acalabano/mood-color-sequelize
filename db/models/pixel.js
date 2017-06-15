'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');


module.exports = db.define('pixel', {
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  day: Sequelize.STRING
});
