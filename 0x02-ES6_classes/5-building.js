export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        console.log(this.#evacuationWarningMessage())
    }
    get sqft() {
        return this._sqft;
      }
    
      set sqft(sqft) {
        this._sqft = sqft;
      }
    
     #evacuationWarningMessage(){
      return 'Hey There';
     }
}