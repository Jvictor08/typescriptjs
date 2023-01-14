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