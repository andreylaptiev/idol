require('dotenv').config();
const { MongoClient } = require('mongodb');

// authentication: username, password, url, database
const user = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const url = process.env.DB_SERVER;
const db = process.env.DB_NAME;

// connection URI
const uri = `mongodb://${user}:${password}@${url}/?authSource=${db}`;

// create and export a new MongoClient
module.exports = new MongoClient(uri);
