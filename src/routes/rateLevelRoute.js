import {Router} from 'Express';
import {getCollection} from '../db';

const router = new Router();

const getAllRates = async() => {
  const rates = await getCollection('rates');

  return await ( await rates.find({})).toArray();
}

router.get('/', (req, res) => {
  return getAllRates()
    .then(rates => {
      console.log(rates);
      return res.json(rates);
    });
});

export default router;