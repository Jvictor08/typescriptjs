"use strict";
// Generics 
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("teste"));
console.log(showData(true));
// Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const secondObj = { name: "Carro", whells: "4", engine: "1.0" };
const thirdObj = { price: 19.90, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// Type Parameters
function getSomeKey(obj, key) {
    return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
    cpu: 'Ryzen 5 5600G'
};
console.log(getSomeKey(server, 'cpu'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "João Victor",
    age: 26,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(myChar,'teste'))
