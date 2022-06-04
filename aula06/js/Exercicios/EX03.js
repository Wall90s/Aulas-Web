// 3 - Crie um sistema que tenha 3 objetos que reprentem uma pessoa contendo:
// nome, idade, endereço, telefone e renda mensal.
// O sistema deve conferir a renda mensal e idade
    // Se a idade for menor que 40 anos e renda mensal maior ou igual a 2000 
    // imprima que o credito liberado será 150 mil

    // Se a idade for maior que 40 anos e renda mensal igual a 2000
    // crédito liberado será 100 mil

let pessoa1 = {
    nome: "Joe Newman",
    idade: 42,
    endereco: "Rua Manoel Automé, 2",
    telefone: 1122334455,
    renda: 15000
}

let pessoa2 = {
    nome: "Gus Unger-Hamilton",
    idade: 26,
    endereco: "Rua do bosque, 324",
    telefone: 1166778899,
    renda: 3000
}

let pessoa3 = {
    nome: "Thom Green",
    idade: 28,
    endereco: "Av. Capitanias, 1818",
    telefone: 2278955339,
    renda: 8000
}

let pessoas = []
pessoas.push(pessoa1, pessoa2, pessoa3)

for (pessoa of pessoas) {
    if(pessoa.idade < 40 && pessoa.renda >= 2000){
        console.log(`O Crédito liberado para ${pessoa.nome} é de 150 mil`)
    } else if (pessoa.idade > 40 && pessoa.renda >= 2000) {
        console.log(`O Crédito liberado para ${pessoa.nome} é de 100 mil`)
    }
}