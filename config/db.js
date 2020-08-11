'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'express-api-template'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb+srv://Admin:UTtCqs0OR4fccVRT@cluster0.6zkez.azure.mongodb.net/FashionBlog?retryWrites=true&w=majority`  //UTtCqs0OR4fccVRT
  //mongodb+srv://Admin:UTtCqs0OR4fccVRT@cluster0.6zkez.azure.mongodb.net/FashionBlog?retryWrites=true&w=majority
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

module.exports = currentDb
