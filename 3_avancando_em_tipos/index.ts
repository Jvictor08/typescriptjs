// 1-Arrays

let numbers: number[] = [2, 4, 6, 8]

numbers.push(10)

console.log(numbers)

console.log(numbers[2])

let names: string[] = ['João', 'Matheus', 'Lucas', 'Jubileu']

names.push('Jorge')

console.log(names)

console.log(names[2])

// 2- Outra sintaxe de array

const nums: Array<number> = [100, 200, 300]

nums.push(400)

console.log(nums)

const nomes: Array<string> = ['José', 'Vinicius', 'João']

nomes.push('Matheus')

console.log(nomes)

// 3- Any

const arr1: any = [1, 'teste', true, {}, []]

console.log(arr1)

arr1.push('feijoada')

// 4 - Parametros tipados

function sum (a: number, b: number) {
    console.log(a + b)
}

sum(5,2)

// sum(a,b)

// 5-Retorno de função 

function sayHello(name: string): string{
    return `Olá ${name}`
}

// console.log(sayHello(150654654))
console.log(sayHello('Jhones'))

// 6- funções anonimas

setTimeout(function(){
    const sallary: number = 1000
    
    // console.log(parseFloat(sallary))

    console.log(sallary)
},2000)



