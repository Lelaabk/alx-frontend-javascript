// File: 5-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = 0;
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
