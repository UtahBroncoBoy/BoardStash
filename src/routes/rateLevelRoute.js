//import dependencies
import {Router} from 'express';

//import getCollection function from db.js (Which connects to the database and retrieves a collection.)
import {getCollection} from '../db';

//declare router
const router = new Router();

//function used to get all rateLevels from the database
const getAllRates = async() => {
  const rates = await getCollection('rateLevel');

  return await ( await rates.find({})).toArray();
}

//set route to retrieve all rates using the getAllRates function
router.get('/', (req, res) => {
  return getAllRates()
    .then(rates => {
      console.log(rates);
      return res.json(rates);
    });
});

//export router to find all rates
export default router;