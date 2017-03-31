export default class {
  /**
   * 
   * @param {*} id 
   * @param {*} name 
   * @param {*} short 
   * @param {*} long 
   * @return instance of the RateLevel class
   */
  constructor(id, name, short, long){
    this._id = id;
    this._name = name;
    this._shortTerm = short;
    this._longTerm = long;
  };
}