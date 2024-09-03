// Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(10);
console.log(circle);
