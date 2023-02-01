// Generics 
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("teste"))
console.log(showData(true))


// Constraint em Generics

function showProductName<T extends {name: string}>(obj: T){
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const secondObj = {name: "Carro", whells: "4", engine: "1.0"}
const thirdObj = {price: 19.90, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(secondObj))
// console.log(showProductName(thirdObj))


// 3- Generics com interface

interface MyObject<T, U, Q> {
    name: string 
    wheels: T
    engine: U
    color: Q
}

type Car1 = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car1 = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)


// Type Parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB',
    cpu: 'Ryzen 5 5600G'
}

console.log(getSomeKey(server,'cpu'))
// console.log(getSomeKey(server,'teste'))


// 4- keyof type operator

type Char = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Char

function showCharName(obj: Char, key: C ){
    return `${obj[key]}` 
}

const myChar: Char = {
    name: "João Victor",
    age: 26,
    hasDriverLicense: true
}

console.log(showCharName(myChar,'name'))
console.log(showCharName(myChar,'age'))
// console.log(showCharName(myChar,'teste'))


