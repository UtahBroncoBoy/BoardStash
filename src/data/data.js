//import dependencies
import uuidV4 from 'uuid/v4';

//import classes
import Billboard from './Billboard';
import RateLevel from './RateLevel';

//import getCollection function from db.js (Which connects to the database and retrieves a collection.)
import {getCollection} from '../db';

//create Billboard instances
let board103 = new Billboard(uuidV4(), 103, undefined);
let board105 = new Billboard(uuidV4(), 105, 'Above Average');
let board106 = new Billboard(uuidV4(), 106, 'Above Average');
let board107 = new Billboard(uuidV4(), 107,'Below Average');
let board111 = new Billboard(uuidV4(), 111, 'Low');
let board115 = new Billboard(uuidV4(), 115, 'Below Average');

//create RateLevel instances
let highRate = new RateLevel(uuidV4(), 'High', 12000, 10000);
let aboveAverageRate = new RateLevel(uuidV4(), 'Above Average', 10000, 8000);
let averageRate = new RateLevel(uuidV4(), 'Average', 8000, 6000);
let belowAverageRate = new RateLevel(uuidV4(), 'Below Average', 6000, 4000);
let lowRate = new RateLevel(uuidV4(), 'Low', 4000, 3000);

//place Billboard and RateLevel instances into arrays
export const billboards = [board103, board105, board106, board107, board111, board115];
export const rateLevels = [highRate, aboveAverageRate, averageRate, belowAverageRate, lowRate];

//function used to export the Billboard data
export const loadBillboardData = async() => {
  const billboardCollection = await getCollection('billboards');
  const result = await billboardCollection.insertMany(billboards);
};

//function used to export the RateLevel data
export const loadRateLevelData = async() => {
  const rateLevelCollection = await getCollection('rateLevel')
  const result = await rateLevelCollection.insertMany(rateLevels);
};

//function used to clear all database data prior to setting up development data
export const deleteData = async() => {
  const billboardCollection = await getCollection('billboards');
  const rateLevelCollection = await getCollection('rateLevel');

  await billboardCollection.remove({});
  await rateLevelCollection.remove({});
};