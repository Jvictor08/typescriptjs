"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1- Exemplo Decorator 
function myDecorator() {
    console.log('Iniciando decorator!');
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando a execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2- M<ultiplos decorators 
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou a.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou b.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou c.");
    };
}
class multipleDecorators {
    testing() {
        console.log("Ordem de execução é: do mais proxímo para o mais distante.");
        console.log("Terminando a execução");
    }
}
__decorate([
    a(),
    b(),
    c()
], multipleDecorators.prototype, "testing", null);
const multDecor = new multipleDecorators();
multDecor.testing();
// 3- Class decorators
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando Usúario!!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const joao = new User("João Victor");
console.log(joao);
// 4- Method Decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5- Acessor Decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `A idade do monstor é: ${this.age}`;
    }
}
__decorate([
    enumerable(false)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 6-Proprety Decorator
// Exigência do sistema todos os ids devem vir no formato EX: (00001)
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newItem = new Id('1');
console.log(newItem);
// 7- Exemplo real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newPen = new Pen(12);
const newBook = new Book(11);
console.log(newPen);
console.log(newBook.createdAt);
// 8 - Exemplo Real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("O usúario já postou!!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usúario: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);
