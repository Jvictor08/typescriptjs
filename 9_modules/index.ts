// 1- Importação de arquivos.
import importGreet from './greet.js'

importGreet();


// 2- Importando variaveis.
import { x } from './variable.js'

console.log(x)


// 3- Multiplas importações
import {a, b, boaIdeia} from './multiple.js'

console.log(a)
console.log(b)
boaIdeia();


// 4- Alias de importação
import { someName as name } from './changename.js';

console.log(name)


// 5- Importando todos os itens da pagina
import * as myNumbers from './numbers.js'

console.log(myNumbers)
const nx = myNumbers.n2
console.log(nx)
myNumbers.myNumbers()


// 6-Importando tipos 
import { Human } from './mytype.js';

class NewHuman implements Human {
    name 
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new NewHuman ("João Victor", 27)

console.log(joao)