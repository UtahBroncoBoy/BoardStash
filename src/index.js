//import dependencies
import Express from 'express';
import BodyParser from 'body-parser';

//import data sets
import {loadBillboardData} from './data/data';
import {loadRateLevelData} from './data/data';

//import routes
import BillboardRoute from './routes/billboardRoute';
import RateLevelRoute from './routes/rateLevelRoute';

//create express application
const app = Express();

//assign port 
const port = process.env.PORT || 5000

//load data sets
loadBillboardData();
loadRateLevelData();

//use body-parser in express application
app.use(BodyParser.json());

//use routes in express application
app.use('/billboards', BillboardRoute);
app.use('/rates', RateLevelRoute);

//open port using express
app.listen(port, () => (console.log(`BoardStash now running on port ${port}`)));

//export express application
export default app;
