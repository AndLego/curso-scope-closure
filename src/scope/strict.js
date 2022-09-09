"use strict";
pi = 3.1416; //detras declara un var = pi y le asigna el valor
console.log(pi); //en modo strict no crea el var detras

function myFunction() {
  "use strict";
  return (pi = 3.1416);
}

console.log(myFunction()); // error pi no esta definida
