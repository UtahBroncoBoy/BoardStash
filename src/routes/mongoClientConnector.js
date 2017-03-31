import MongoClient from 'mongod';

const databaseName = 'billboards';
const url = `mongodb://localhost:27017/${databaseName}`;
let database;

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