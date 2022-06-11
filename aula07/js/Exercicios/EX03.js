// 3 - Criar uma função que receba como parâmetro o nome, sobrenome, idade e imprima na tela as informações 
// EX: Seu nome completo é {nome} {sobrenome} e você tem {idade} anos

let nome = 'Cristiam'
let sobrenome = 'Carvalho Oliveira'
let idade = 14

function imprimirDadosTela(nome, sobrenome, idade){
    console.log(`Seu nome completo é ${nome} ${sobrenome} e você tem ${idade} anos.`)
}

imprimirDadosTela(nome, sobrenome, idade)