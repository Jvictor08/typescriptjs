// 1-Generics 
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("teste"))
console.log(showData(true))


// 2-Constraint em Generics
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


// 4-Type Parameters
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


// 5-keyof type operator
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


// 6-typeof type operator
const userName: string = "Jorge"

const userName2: typeof userName = "Matheus"

// const userName3: typeof userName = 7

type x = typeof userName

const userName4: x = "Marcelo"


// 7-indexed acess type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 150000,
    kg: 7500,
    description: "Caminhão VW semi-novo"
}

function showKm(km: Km){
    console.log(`A quilometragem do veiculo é: ${km}`)
}

showKm(newTruck.km)

const newCar: Truck = {
    km: 90000,
    kg: 1300,
    description: "Carro usado"
}

showKm(newCar.km)


// 8-Conditional types

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2: myType = "teste"

type myTypeB = Teste extends {showNumber(): number} ? string : boolean


// 9-Template literals type
type testA = "text"
type TesteB = `some ${testA}`

const testing: TesteB = "some text"
// const testing2: TesteB = "some text 2"

type a1 = "testando"
type a2 = "union"

type a3 = `${a1}` | `${a2}`
const anotherTest: a3 = `testando`
// const anotherTest2: a3 = `testando2`




