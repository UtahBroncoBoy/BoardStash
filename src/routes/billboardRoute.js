//import dependencies
import {Router} from 'Express';

//import getCollection function from db.js (Which connects to the database and retrieves a collection.)
import {getCollection} from '../db';

//declare router
const router = new Router();

//function used to get all billboards from the database
const getAllBillboards = async() => {
  const billboards = await getCollection('billboards');

  return await ( await billboards.find({})).toArray();
}

//set route to retrieve all billboards using the getAllBillboards function
router.get('/', (req, res) => {
  return getAllBillboards()
    .then(billboards => {
      console.log(billboards);
      return res.json(billboards);
    });
});

//export router to find all billboards
export default router;
