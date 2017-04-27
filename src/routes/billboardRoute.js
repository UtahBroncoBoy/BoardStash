//import dependencies
import {Router} from 'Express';

//import getCollection function from db.js (Which connects to the database and retrieves a collection.)
import {getCollection} from '../db';
import {billboards} from '../data/data';
import Billboard from '../data/Billboard';

//declare router
const router = new Router();

//function used to get all billboards from the database
const getAllBillboards = async() => {
  const billboards = await getCollection('billboards');

  return await ( await billboards.find({})).toArray();
}

//function used to retrieve and return one billboard from the collection
const getBillboard = async(_id) => {
  const billboardCollection = await getCollection('billboards');
  const billboard = await (await billboardCollection.find({_id})).toArray();
  return billboard;
};

//set route to retrieve all billboards using the getAllBillboards function
router.get('/', (req, res) => {
  return getAllBillboards()
    .then(billboards => {
      console.log(billboards);
      return res.json(billboards);
    });
});


//set route to retrieve one billboard
router.get('/:billboard', (req, res) => {
  return getBillboard(req.params.billboard).then(
    billboard => {
      console.log(billboard);
      return res.json(billboard);
    }
  )
});

//export router to find all billboards
export default router;
