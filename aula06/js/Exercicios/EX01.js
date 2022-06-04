// 1 - Criar 3 objetos com informações de pessoas contendo nome e idade,
// em seguida imprima na tela quem é o mais velho

let pessoa1 = {
    nome: "Joe Newman",
    idade: 37
}

let pessoa2 = {
    nome: "Gus Unger-Hamilton",
    idade: 26
}

let pessoa3 = {
    nome: "Thom Green",
    idade: 28
}

if (pessoa1.idade > pessoa2.idade && pessoa1.idade > pessoa3.idade) {
    console.log(`${pessoa1.nome} é a pessoa mais velha`)
} else if (pessoa2.idade > pessoa1.idade && pessoa2.idade > pessoa3.idade) {
    console.log(`${pessoa2.nome} é a pessoa mais velha`)
} else {
    console.log(`${pessoa3.nome} é a pessoa mais velha`)
}
