"use strict";
// 1-Arrays
let numbers = [2, 4, 6, 8];
numbers.push(10);
console.log(numbers);
console.log(numbers[2]);
let names = ['João', 'Matheus', 'Lucas', 'Jubileu'];
names.push('Jorge');
console.log(names);
console.log(names[2]);
// 2- Outra sintaxe de array
const nums = [100, 200, 300];
nums.push(400);
console.log(nums);
const nomes = ['José', 'Vinicius', 'João'];
nomes.push('Matheus');
console.log(nomes);
// 3- Any
const arr1 = [1, 'teste', true, {}, []];
console.log(arr1);
arr1.push('feijoada');
// 4 - Parametros tipados
function sum(a, b) {
    console.log(a + b);
}
sum(5, 2);
// sum(a,b)
// 5-Retorno de função 
function sayHello(name) {
    return `Olá ${name}`;
}
// console.log(sayHello(150654654))
console.log(sayHello('Jhones'));
// 6- funções anonimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7-Tipos de objetos
function passCoord(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 234, y: 456 };
passCoord(objCoord);
// passCoord({nome: João, sobrenome: Marcolino})
// const pessoaObj:{nome:string, surname:string} = {nome:'João', surname:'Marcolino'}
// 8- propriedades opcionais 
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 4);
showNumbers(4, 5);
// 9- Validação de propriedades opcionais
function advancedGreeting(firsname, lastname) {
    if (lastname !== undefined) {
        return `Olá ${firsname} ${lastname}, tudo bem?`;
    }
    return `Olá ${firsname}, tudo bem?`;
}
console.log(advancedGreeting('João', 'Victor'));
console.log(advancedGreeting('Matheus'));
// 10-Union type
function showBalance(balance) {
    console.log(`O saldo da sua conta é ${balance}`);
}
showBalance(100);
showBalance('500');
// showBalance(true)
const array2 = [1, true, 'teste'];
console.log(array2);
// 11- Avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Acesso negado!!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(321);
showId('548');
showId('244');
function showCoord(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 32,
    z: 22
};
showCoord(coordObj);
const somePerson = { name: 'João', age: 26 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15- Literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção correta é ${direction}`);
}
showDirection('center');
// showDirection('top')
// 16- Non null operators
const p = document.getElementById('paragrafo');
console.log(p.innerHTML);
// 17- Bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18- Symbol
let SymbolA = Symbol('a');
let SymbolB = Symbol('a');
console.log(SymbolA === SymbolB);
console.log(SymbolA == SymbolB);
