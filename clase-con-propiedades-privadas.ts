//Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make.

export class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive() {
    console.log(`Driving a ${this.make}`);
  }

  getMake() {
    return this.make;
  }
}

const myCar = new Car("Ford");
console.log(myCar.getMake());
