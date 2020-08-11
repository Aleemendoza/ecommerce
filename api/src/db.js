process.env.FOO;
require('dotenv').config();


const Sequelize = require('sequelize');
/* const { singularize } = require('sequelize/types/lib/utils'); */

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;


function db() {

  return new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommercedevelopment`, {
    
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
}

module.exports = db;
