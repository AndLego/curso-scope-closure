var firstName; // Undefined -- declarar sin asignar
firstName = "Oscar";
console.log(firstName); // Oscar

var lastName = "David"; // declarar - asignar
lastName = "Ana"; // re-asignar
console.log(lastName); // Ana

var secondName = "Juan"; // declarando - asignar
var secondName = "Pablo"; // Re-declarado
console.log(secondName); // Pablo

// Let

let fruit = "Apple"; //declarar - asignar
fruit = "kiwi"; // re-asignar
console.log(fruit); // kiwi

//let fruit = "Banana" // no se puede re-declarar en este scope

// const

const animal = "dog"; //declara - asigna
animal = "cat"; //re-asignar
console.log(animal); // error, no se puede reasignar const

// funcionan los metodos porque no reasignan
const vehicles = [];
vehicles.push("corola");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
