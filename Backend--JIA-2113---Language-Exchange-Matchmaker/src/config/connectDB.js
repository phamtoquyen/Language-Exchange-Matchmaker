//// get the client
//import mysql from 'mysql2/promise';
//
//const pool = mysql.createPool({
//  host: 'localhost',
//  user: 'root',
//  database: 'languageexchangematchmaker'
//})
//
//process.on('unhandledRejection', error => {
//  // Will print "unhandledRejection err is not defined"
//  console.log('unhandledRejection', error.message);
//});
//
//export default pool;

const { Sequelize } = require('sequelize');

//// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// Deploy the app to a host --> we might need to use it later
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
//
//// Option 2: Passing parameters separately (sqlite)
//const sequelize = new Sequelize({
//  dialect: 'sqlite',
//  storage: 'path/to/database.sqlite'
//});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('languageexchangematchmaker', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

module.exports = connectDB;