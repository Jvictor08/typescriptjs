// 1- De tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function productDetails (product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvaliable){
        console.log(`O produto está disponível`)
    }else{
        console.log(`O produto não está disponível`)
    }
}

const paints = {
    name:'calça',
    price: 49.99,
    isAvaliable: true
}

productDetails(paints)
productDetails({name: 'tenis', price: 149.90, isAvaliable: false})


// 2- Propriedade opcional em interface 
interface Client{
    email: string,
    role?: string
}

function showUserDetails(user: Client){
    console.log(`O usúario tem o email ${user.email}`)
    if(user.role){
        console.log(`A função do usúario é ${user.role}`)
    }else{
        console.log(`Bem vindo!!`)
    }
}

const u1:Client = {email:'joão@email.com', role:'Admin'}
const u2:Client = {email:'matheus@email.com'}

showUserDetails(u1)
showUserDetails(u2)

// 3- Readonly

interface Car {
    name: string,
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    name: 'fusca',
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5


// 4- index signature

interface CoordObjects {
    [index: string]: number
}

let coords: CoordObjects = {
    x: 10
}

coords.y = 15

// coords.z = "testee"

console.log(coords)


// 5- Extending types
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const matheus: Human = {
    name: "Matheus",
    age: 30
}

console.log(matheus)

const goku: SuperHuman = {
    name: "Goku",
    age: 35,
    superpowers: ['kamehameha', 'Genki-dama',]
}

console.log(goku)

console.log(goku.superpowers[1])


// 6- interface types

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type CharacterWithGun = Character & Gun 

const arnold: CharacterWithGun = {
    name:'Arnold',
    type:'Shotgun',
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)


// 7- Readonly Array

let myArray: ReadonlyArray<string> = ["Maça", "Banana", "Laranja"]

//  myarray[3] = "Mamão"

console.log(myArray)

// myArray[3] = "Mamão"

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)


// Tuplas

type fiveNumbers = [number, number, number, number, number]

// number []

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, "teste", 4, 5] 
// const myNumberArray3: fiveNumbers = [1, 2, "teste", false, true]

console.log(myNumberArray)

type nameAndAge = [string, number]

const userAgain:nameAndAge = ["Paulo", 30]

console.log(userAgain)

userAgain[0] = "Jorge"

console.log(userAgain[0])


// 9 Tuplas com readonly

function showNumbers1(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers1([1, 2])


