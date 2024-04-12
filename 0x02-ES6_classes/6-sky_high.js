// File: 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = 0;
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
