import { triangulo } from "./function.js";

console.log("O resultado esperado é true, 3, 4, 5: ");
console.log(triangulo(3, 4, 5));

console.log("O resultado esperado é false, 1, 2, 3: ");
console.log(triangulo(1, 2, 3));

console.log("O resultado esperado é false, 10, 6, 4: ");
console.log(triangulo(10, 6, 4));

console.log("O resultado esperado é false, -1, 7, -4: ");
console.log(triangulo(-1, 7, -4));

console.log("O resultado esperado é true, 6, 8, 10: ");
console.log(triangulo(6, 8, 10));
