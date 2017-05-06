//Billboard class

export default class {
  /**
   * 
   * @param {*} faceNumber 
   * @param {*} rateLevel 
   * @param {*} rate 
   * @return the instance of the Billboard class
   */
  constructor(faceNumber, rateLevel = 'Average') {
    this.faceNumber = faceNumber;
    this.rateLevel = rateLevel;
  }
};