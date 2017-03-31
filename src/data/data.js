import Billboard from './Billboard';
import RateLevel from './RateLevel';
import uuidV4 from 'uuid/v4';
import {getCollection} from '../db';

let board103 = new Billboard(uuidV4(), 103, undefined);
let board105 = new Billboard(uuidV4(), 105, 'Above Average');
let board106 = new Billboard(uuidV4(), 106, 'Above Average');
let board107 = new Billboard(uuidV4(), 107,'Below Average');
let board111 = new Billboard(uuidV4(), 111, 'Low');
let board115 = new Billboard(uuidV4(), 115, 'Below Average');

let highRate = new RateLevel(uuidV4(), 'High', 12000, 10000);
let aboveAverageRate = new RateLevel(uuidV4(), 'Above Average', 10000, 8000);
let averageRate = new RateLevel(uuidV4(), 'Average', 8000, 6000);
let belowAverageRate = new RateLevel(uuidV4(), 'Below Average', 6000, 4000);
let lowRate = new RateLevel(uuidV4(), 'Low', 4000, 3000);

export const billboards = [board103, board105, board106, board107, board111, board115];
export const rateLevels = [highRate, aboveAverageRate, averageRate, belowAverageRate, lowRate];

export const loadBillboardData = async() => {
  const billboardCollection = await getCollection('billboards');
  const result = await billboardCollection.insertMany(billboards);
};

export const loadRateLevelData = async() => {
  const rateLevelCollection = await getCollection('rateLevel')
  const result = await rateLevelCollection.insertMany(rateLevels);
};