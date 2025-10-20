function somar(array) {
    let soma = 0; 
    for (let value of array) {
        soma += value; 
    }
    return soma;
} 


function multiplicar(array) {
    let produto = 1;
    for (let value of array) {
      produto *= value;
    }
    return produto; 
}

function sumOdds(array) {
    let soma = 0 
    for (let value of array) {
        if (value % 2) soma += value; 
    }
    return soma; 
}

console.log("Soma"); 
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("Produto"); 
console.log(multiplicar([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log("sumOdds"); 
console.log(sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));




