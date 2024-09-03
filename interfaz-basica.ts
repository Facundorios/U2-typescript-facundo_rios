// Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

export interface Person {
  firstName: string;
  //?: significa que es opcional
  lastName?: string;
}

let yo: Person = {
  firstName: "Facundo",
  lastName: "Ríos",
};
