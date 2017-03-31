import {Router} from 'Express';
import {getCollection} from '../db';

const router = new Router();

const getAllBillboards = async() => {
  const billboards = await getCollection('billboards');

  return await ( await billboards.find({})).toArray();
}

router.get('/', (req, res) => {
  return getAllBillboards()
    .then(billboards => {
      console.log(billboards);
      return res.json(billboards);
    });
});

export default router;
