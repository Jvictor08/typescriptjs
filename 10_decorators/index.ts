// 1- Exemplo Decorator 
function myDecorator() {
    console.log('Iniciando decorator!');

    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    };
}

class myClass {
    name!: string

    @myDecorator()
    testing() {
        console.log("Terminando a execução do método");
    }
}

const myObj = new myClass();

myObj.testing();


// 2- M<ultiplos decorators 
function a() {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor 
    ) {
        console.log("Executou a.")
    }
}

function b() {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor 
    ) {
        console.log("Executou b.")
    }
}

function c() {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor 
    ) {
        console.log("Executou c.")
    }
}

class multipleDecorators {
    @a()
    @b()
    @c()
    testing() {
        console.log("Ordem de execução é: do mais proxímo para o mais distante.")
        console.log("Terminando a execução")
    }

}

const multDecor = new multipleDecorators();

multDecor.testing()

// 3- Class decorators

function classDec(constructor: Function) {
    console.log(constructor.name)
    if (constructor.name === "User"){
        console.log("Criando Usúario!!")
    }    
}

@classDec
class User {
    name;

    constructor(name: string) {
        this.name = name
    }
}

const joao = new User("João Victor")

console.log(joao)


// 4- Method Decorators
function enumerable(value: boolean){
    return function(target:any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

class Machine {
    name;

    constructor(name: string){
        this.name = name;
    }

    
    @enumerable(true)
    showName() {
        console.log(this)
        return`O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator");

console.log(trator.showName())


// 5- Acessor Decorator

class Monster {
    name?
    age?

    constructor (name:string, age: number){
        this.name = name;
        this.age = age;
    }

    @enumerable(false)
    get showName() {
        return`O nome do monstro é ${this.name}`
    }

    @enumerable(true)
    get showAge() {
        return`A idade do monstor é: ${this.age}` 
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6-Proprety Decorator
// Exigência do sistema todos os ids devem vir no formato EX: (00001)
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        
        let value: string

        const getter = function() {
            return value
        }

        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })

    }
}

class Id {
    @formatNumber()
    id 

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new Id('1')

console.log(newItem)


// 7- Exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book{
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newPen = new Pen(12)

const newBook = new Book(11)

console.log(newPen)

console.log(newBook.createdAt)


// 8 - Exemplo Real method decorator
function checkIfUserPosted() {
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
    ){
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function(...args: any[]){
            if(args[1] === true) {
                console.log("O usúario já postou!!")
                return null
            }else{
                return childFunction.apply(this, args)
            }
        }
    } 
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usúario: ${content}`)
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)
newPost.post("Meu terceiro post!", newPost.alreadyPosted)