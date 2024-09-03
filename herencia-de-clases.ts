// #Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando.

import { Car } from "./clase-con-propiedades-privadas";

//crear la clase ElectricCar que extienda de Car
class ElectricCar extends Car {
  bateryLife: number;

  //incluir una propiedad adicional batteryLife (vida de la batería) de tipo número
  constructor(make: string) {
    super(make);
    this.bateryLife = 100;
  }

  //añadir un método charge() que imprima un mensaje diciendo que el coche se está cargando
  charge() {
    console.log("The car is charging");
  }
}

const myCar = new ElectricCar("Tesla");
myCar.charge();
