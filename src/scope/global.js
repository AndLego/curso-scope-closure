// variables

var a; // declarando
var b = "b"; // declaramos y asignamos
b = "bb"; //reasignacion
var a = "aa"; //redeclaracion

// Global Scope
var fruit = "Apple"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; //global -- asignacion sin declarar
  console.log("funcion", country);
}

countries();
console.log("fuera", country);