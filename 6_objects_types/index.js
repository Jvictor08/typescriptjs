"use strict";
// 1- De tipo de objeto para função com interface
function productDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log(`O produto está disponível`);
    }
    else {
        console.log(`O produto não está disponível`);
    }
}
const paints = {
    name: 'calça',
    price: 49.99,
    isAvaliable: true
};
productDetails(paints);
productDetails({ name: 'tenis', price: 149.90, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usúario tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usúario é ${user.role}`);
    }
    else {
        console.log(`Bem vindo!!`);
    }
}
const u1 = { email: 'joão@email.com', role: 'Admin' };
const u2 = { email: 'matheus@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    name: 'fusca',
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
// coords.z = "testee"
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 35,
    superpowers: ['kamehameha', 'Genki-dama',]
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7- Readonly Array
let myArray = ["Maça", "Banana", "Laranja"];
//  myarray[3] = "Mamão"
console.log(myArray);
// myArray[3] = "Mamão"
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number []
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, "teste", 4, 5] 
// const myNumberArray3: fiveNumbers = [1, 2, "teste", false, true]
console.log(myNumberArray);
const userAgain = ["Paulo", 30];
console.log(userAgain);
userAgain[0] = "Jorge";
console.log(userAgain[0]);
// 9 Tuplas com readonly
function showNumbers1(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers1([1, 2]);
