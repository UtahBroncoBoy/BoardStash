//RateLevel class

export default class {
  /**
   * 
   * @param {*} id 
   * @param {*} name 
   * @param {*} short 
   * @param {*} long 
   * @return instance of the RateLevel class
   */
  constructor(name, short, long){
    this.name = name;
    this.shortTerm = short;
    this.longTerm = long;
  };
}