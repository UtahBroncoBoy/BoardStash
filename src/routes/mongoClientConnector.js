//import dependencies
import MongoClient from 'mongod';

//declare databaseName, database, and declare and set url to the database.
const databaseName = 'billboards';
const url = `mongodb://localhost:27017/${databaseName}`;
let database;

//function used to connect to the database
export const connect = () => {
  MongoClient.connect(url,(err, db) => {
    if(err) {
      console.error(`There was an error connecting to ${databaseName}`);
      throw(err);
    }
    database = db;

    return db;
  });
}