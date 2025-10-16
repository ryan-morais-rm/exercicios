function classificarTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Os lados devem ser maiores que zero.";
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Os valores informados não formam um triângulo.";
  }

  if (a === b && b === c) {
    return "Triângulo Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Triângulo Isósceles";
  } else {
    return "Triângulo Escaleno";
  }
}

console.log(classificarTriangulo(2, 2, 2)); // Triângulo Equilátero
console.log(classificarTriangulo(3, 3, 5)); // Triângulo Isósceles
console.log(classificarTriangulo(3, 4, 5)); // Triângulo Escaleno
console.log(classificarTriangulo(1, 2, 3)); // Não forma um triângulo
console.log(classificarTriangulo(0, 2, 3)); // Lado inválido

