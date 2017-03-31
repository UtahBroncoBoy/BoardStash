import Express from 'express';
import BodyParser from 'body-parser';
import {loadBillboardData} from './data/data';

import BillboardRoute from './routes/billboardRoute';
import RateLevelRoute from './routes/rateLevelRoute';

const app = Express();
const port = process.env.PORT || 5000

loadBillboardData();

app.use(BodyParser.json());
app.use('/billboards', BillboardRoute);
app.use('/rates', RateLevelRoute);

app.listen(port, () => (console.log(`BoardStash now running on port ${port}`)));

export default app;
