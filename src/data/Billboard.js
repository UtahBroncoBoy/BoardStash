export default class {
  /**
   * 
   * @param {*} faceNumber 
   * @param {*} rateLevel 
   * @param {*} rate 
   * @return the instance of the Billboard class
   */
  constructor(faceNumber, rateLevel = 'Average', shortTermRate, longTermRate) {
    this._faceNumber = faceNumber;
    this._rateLevel = rateLevel;
    this._rate = rate;
    this._shortTermRate = shortTermRate;
    this._longTermRate = longTermRate;
  } 
};