//import dependencies
import { MongoClient } from 'mongodb';

//assign URI for mongo database
const mongoPort = '27017'
const databaseName = 'billboards'

const mongoUri = process.env.MONGO_URI || `mongodb://jeffwfredericks:Nov141996@ds129641.mlab.com:29641/boardstash`;

//function used to connect to mongo database
const connect = async () => await MongoClient.connect(mongoUri);

//export funciton used to connect to mongo database
export default connect;

//connect to mongo database and return collection passed into parameter
export const getCollection = async(collectionName)=> {
  const db = await connect();
  return db.collection(collectionName);
};