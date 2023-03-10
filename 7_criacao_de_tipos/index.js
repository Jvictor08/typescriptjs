"use strict";
// 1-Generics 
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("teste"));
console.log(showData(true));
// 2-Constraint em Generics
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
// 4-Type Parameters
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
// 6-typeof type operator
const userName = "Jorge";
const userName2 = "Matheus";
const userName4 = "Marcelo";
const newTruck = {
    km: 150000,
    kg: 7500,
    description: "Caminhão VW semi-novo"
};
function showKm(km) {
    console.log(`A quilometragem do veiculo é: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 90000,
    kg: 1300,
    description: "Carro usado"
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
const anotherTest = `testando`;
// const anotherTest2: a3 = `testando2`
