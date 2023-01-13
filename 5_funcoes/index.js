"use strict";
// 1- Void 
function withoutReturn() {
    console.log("Está função não tem retorno!");
}
withoutReturn();
// 2- Callback como argumento
function greetings(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greetings, "João");
// 3- Generic function 
function firstElement(arr) {
    return arr[2];
}
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement(["1", "2", "3"]));
// console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4- Constraints nas Generics Functions
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "44"));
// console.log(biggestNumber("10", 9))
// 5- Especificar o tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando", "testado"]));
// 6-Parametros opicionais 
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem ?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("João", "Sr"));
console.log(modernGreeting("Matheus"));
// 7- Parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(3));
console.log(somaDefault(23, 15));
// 8- Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[2]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3, 4, 5]);
doSomething(5);
