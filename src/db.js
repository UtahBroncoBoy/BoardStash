//import dependencies
import { MongoClient } from 'mongodb';

//assign URI for mongo database
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/billboards';

//function used to connect to mongo database
const connect = async () => await MongoClient.connect(mongoUri);

//export funciton used to connect to mongo database
export default connect;

//connect to mongo database and return collection passed into paramater
export const getCollection = async(collectionName)=> {
  const db = await connect();
  return db.collection(collectionName);
};