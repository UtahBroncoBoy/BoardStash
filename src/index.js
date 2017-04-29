//import dependencies
import Express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';

//import data sets
import {loadBillboardData} from './data/data';
import {loadRateLevelData} from './data/data';
import {deleteData} from './data/data';

//import routes
import BillboardRoute from './routes/billboardRoute';
import RateLevelRoute from './routes/rateLevelRoute';

//determine type of environment
const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//create express application
const app = Express();

//assign port 
const port = process.env.PORT || 4343

//load data sets if it is a development environment
if(ENV == 'development'){
  const setupDataEnvironment = async() => {
    await deleteData();
    await loadBillboardData();
    await loadRateLevelData();
  };
  setupDataEnvironment();
};

//use body-parser in express application
app.use(BodyParser.json());

//use routes in express application
app.use('/billboards', BillboardRoute);
app.use('/rates', RateLevelRoute);

//open port using express
app.listen(port, () => (console.log(`BoardStash now running on port ${port}`)));

//export express application
export default app;
