//Usando JavaSScript, implementar una función que dado un número entero,
//retorne otro número formado por los dígitos del número original en orden inverso.


const assert = require('assert');

function reverseNumber(number) {
    // Convertir el número a string para tener acceso a los métodos de string
    const reversedNumber = number.toString();

    // Convertir el string a un array de caracteres para tener acceso a los métodos de array y ordenar de forma descendente
    const numberArray = reversedNumber.split('').sort((a, b) => b - a);

    // Unir el array de caracteres en un string y convertirlo a un número
    return parseInt(numberArray.join(''), 10);
}

function testReverseNumber() {
    assert(reverseNumber(1234) === 4321);
    assert(reverseNumber(1) === 1);
    assert(reverseNumber(0) === 0); 
    console.log('All test passed');
}

testReverseNumber();