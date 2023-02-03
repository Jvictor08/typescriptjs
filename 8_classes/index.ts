// 1- Campos em classe
class User {
    name!: string
    age!: number
}

const matheus = new User()

console.log(matheus)

matheus.name = "Matheus"
// matheus.job = "Programmer"

console.log(matheus)


// 2- Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João Victor", 27)
// const pedro = new NewUser("Pedro")

console.log(joao)


// 3- Propriedades readonly
class car {
    name
    wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new car("Fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5  ---->> Devido a propriedade "wheels" estar como readonly ela não altera o valor, as demais mudam. 

console.log(fusca)

// 4- Herança e Super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

console.log(trator)

class KillerMachine extends Machine {
    guns 

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(destroyer)


// 5- Metodos 
class Dwarf {
    name

    constructor (name: string) {
        this.name = name
    }

    greeting () {
        console.log("Hello Stranger!!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy)

jimmy.greeting()

console.log(jimmy)