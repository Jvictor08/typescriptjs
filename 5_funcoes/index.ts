// 1- Void 

function withoutReturn(): void {
    console.log("Está função não tem retorno!")
}

withoutReturn()


// 2- Callback como argumento

function greetings(name:string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string){
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greetings, "João")


// 3- Generic function 

function firstElement<T>(arr: T[]): T{
    return arr[2]
}

console.log(firstElement(["a", "b", "c"]))
console.log(firstElement(["1", "2", "3"]))
// console.log(firstElement("teste"))

function mergeObjects<U, T>(obj1: U, obj2: T){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Programmer"})

console.log(newObject)


// 4- Constraints nas Generics Functions

function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T

    if (+a > +b){
        biggest = a
    }else{
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("15", "44"))
// console.log(biggestNumber("10", 9))

// 5- Especificar o tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [4,5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["teste", "testando", "testado"]))


// 6-Parametros opicionais 
function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem ?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("João","Sr"))
console.log(modernGreeting("Matheus"))


// 7- Parametro default

function somaDefault(n: number, m = 10):number {
    return n + m
}

console.log(somaDefault(3))
console.log(somaDefault(23,15))


// 8- Unknown

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[2])
    }else if (typeof x === "number"){
        console.log("X é um número")
    }
}

doSomething([1,2,3,4,5])
doSomething(5)


// 9- Never

function showErrorMesseage(msg: string): never{
    throw new Error(msg)
}

// showErrorMesseage('Algum erro!')


// 10- Rest operator

function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(5,348,2348))

// 11- Destructuring como parametro

function showProductDetails({name, price}:{name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa ${price}` 
}

const shirt = {name:"camiseta", price: 45.99}
const bermuda = {name:"bermuda", price: 39.99}

console.log(showProductDetails(shirt))
console.log(showProductDetails(bermuda))
// console.log(showProductDetails('testeeee'))