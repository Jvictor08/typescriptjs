"use strict";
// 1- Campos em classe
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
// matheus.job = "Programmer"
console.log(matheus);
// 2- Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João Victor", 27);
// const pedro = new NewUser("Pedro")
console.log(joao);
// 3- Propriedades readonly
class car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
// fusca.wheels = 5  ---->> Devido a propriedade "wheels" estar como readonly ela não altera o valor, as demais mudam. 
console.log(fusca);
// 4- Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
// 5- Metodos 
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hello Stranger!!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
console.log(jimmy);
// 6-This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão modelo ${this.model}, tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 450);
const scania = new Truck("Scania", 480);
volvo.showDetails();
scania.showDetails();
// 7-Getters
class Person {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
const joaoVictor = new Person("João", "Victor");
console.log(joaoVictor.nome);
console.log(joaoVictor.nomeCompleto);
// 8-Setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("Coordenada X adicionada com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Coordenada Y adicionada com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const anotherPost = new TestingInterface("Um novo começo");
console.log(anotherPost.itemTitle());
// 10- Override de métodos 
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11- Visibilidade: Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const instC = new C();
console.log(instC);
const instD = new D();
console.log(instD);
// 12- Visibilidade: Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log(`Esse método é protegido.`);
    }
}
class F extends E {
    showX() {
        console.log(`O x é ${this.x}`);
    }
    showMethod() {
        this.protectedMethod();
    }
}
const instF = new F();
instF.showMethod();
// 13- Visibilidade: Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        return `Metodo privado`;
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const privateObj = new PrivateClass();
// console.log(privateObj.name)
console.log(privateObj.showName());
console.log(privateObj.showPrivateMethod());
// class Testing extends PrivateClass {
//     myMethod() {
//         this.privateMethod()
//     }
// }
// 14- Static members
class StaticMembers {
    static StaticMethod() {
        console.log("Este é o método estático");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.StaticMethod();
// 15- Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O primeiro é: ${this.first}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(typeof newItem.first);
const secondItem = new Item(15, true);
console.log(secondItem.showFirst);
// 16- Parameters properties
class ParamProp {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `A quantidade em estoque é ${this.qty}`;
    }
    get showPrice() {
        return `O preço do produto é ${this.price}`;
    }
}
const newShirt = new ParamProp("Camisa", 38, 19.95);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17- Class expression
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new MyClass("Geralt de Rívia");
console.log(pessoa);
console.log(pessoa.name);
// 18- Abstract Class
class AbstractClass {
}
// const newObj = new AbstractClass
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample("Josias o Paladino");
newAbstractObj.showName();
// 19-Relação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
