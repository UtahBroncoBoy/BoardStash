import {Router} from 'express';
import {getCollection} from '../db';
import {billboards} from '../data/data';
import Billboard from '../data/Billboard';


//declare router
const router = new Router();

//set route to retrieve all billboards using the getAllBillboards function
router.get('/', (req, res) => {
  return getAllBillboards()
    .then(billboards => {
      return res.json(billboards);
    });
});


//set route to retrieve one billboard
router.get('/:billboard', (req, res) => {
  return getBillboard(req.params.billboard)
  .then(billboard => {
      return res.json(billboard);
    }
  )
});

//set route to create a billboard
router.post('/', (req, res) => {
  let billboard = new Billboard(
    req.body.faceNumber,
    req.body.rateLevel
  );
  storeBillboard(billboard);
  return res.json(billboard);
});

//set route to delete a billboard
router.delete('/:id', (req, res) => {
  deleteBillboard(req.params.id);
  res.send(`Item ${req.params.id} has been deleted`);
});


//function used to get all billboards from the database
const getAllBillboards = async() => {
  const billboards = await getCollection('billboards');

  return await ( await billboards.find({})).toArray();
};

//function used to retrieve and return one billboard from the collection
const getBillboard = async(id) => {
  const billboardCollection = await getCollection('billboards');
  const billboard = await (await billboardCollection.find({id})).toArray();
  return billboard;
};

//function used to store a new billboard
const storeBillboard = async(billboard) => {
  const billboardCollection = await getCollection('billboards');
  return billboardCollection.insertOne(billboard);
};

//function used to delete a billboard
const deleteBillboard = async(billboardID) => {
  const billboardCollection = await getCollection('billboards');
  billboardCollection.deleteOne({_id: billboardID});
}

export default router;
