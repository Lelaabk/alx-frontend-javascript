// File: 10-car.js

const carAttributes = Symbol('carAttributes');

export default class Car {
  constructor(brand, motor, color) {
    this[carAttributes] = {
      _brand: brand,
      _motor: motor,
      _color: color
    };
  }

  cloneCar() {
    const { _brand, _motor, _color } = this[carAttributes];
    return new Car(_brand, _motor, _color);
  }
}
