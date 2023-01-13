"use strict";
// 1- Narrowing
function soma1(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else
        (console.log('Erro!!'));
}
soma1("5", "2");
soma1(6, 4);
soma1(3, "2");
// 2-Checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor defina uma operação");
    }
}
operations([1, 2, 3, 4], "sum");
operations([2, 4, 6], "multiply");
operations([3, 6, 9]);
// 3- Instance of 
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, gostaria de ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4- Operador IN
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const haika = new Dog("Haika", "Pit-Bull");
const puppy = new Dog("puppy");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`A raça é ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é um SRD`);
    }
}
showDogDetails(puppy);
showDogDetails(haika);
// 5-Desafio com narrowing 
function userReview(estrela) {
    if (typeof estrela == 'number') {
        if (estrela == 5) {
            console.log(`${estrela}, excelente trabalho!`);
        }
        else if (estrela == 4) {
            console.log(`${estrela}, Muito bom!`);
        }
        else if (estrela == 3) {
            console.log(`${estrela}, pode melhorar!`);
        }
        else if (estrela == 2) {
            console.log(`${estrela}, ruim!`);
        }
        else if (estrela == 1) {
            console.log(`${estrela}, péssimo!`);
        }
    }
    else {
        console.log(`Não foi qualificado`);
    }
}
userReview(5);
userReview(1);
function showUserReview(review) {
    if (!review) {
        console.log("Você não foi avaliado");
        return;
    }
    console.log(`A nota que você recebeu foi ${review}, obrigado!!`);
}
showUserReview(false);
showUserReview(3);
showUserReview(5);
