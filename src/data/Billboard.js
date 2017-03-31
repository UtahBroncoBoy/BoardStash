export default class {
  /**
   * 
   * @param {*} faceNumber 
   * @param {*} rateLevel 
   * @param {*} rate 
   * @return the instance of the Billboard class
   */
  constructor(id, faceNumber, rateLevel = 'Average') {
    this._id = id;
    this._faceNumber = faceNumber;
    this._rateLevel = rateLevel;
  }
  get faceNumber(){return this._faceNumber;}
  get rateLevel() {return this._rateLevel;}

  set faceNumber(faceNumber){this._faceNumber = faceNumber;}
  set rateLevel(rateLevel){this._rateLevel = rateLevel;}

};