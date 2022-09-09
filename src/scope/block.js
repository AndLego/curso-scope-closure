// Block Scope

function fruits() {
  if (true) {
    var fruit1 = "Apple"; //function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; // block scope
    console.log(fruit2); // Kiwi
    console.log(fruit3); // Banana
  }
  console.log(fruit1); // Apple
  console.log(fruit2); //not defined
  console.log(fruit3); //not defined
}

fruits();
console.log(fruit1); //not defined
