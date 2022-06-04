// 2 - Criar 3 objetos com informações de pessoas contendo nome e altura
// imprimir na tela quem é o mais alto e o mais baixo

let pessoa1 = {
    nome: "Joe Newman",
    altura: 1.5
}

let pessoa2 = {
    nome: "Gus Unger-Hamilton",
    idade: 1.9
}

let pessoa3 = {
    nome: "Thom Green",
    idade: 1.6
}

let pessoas = []
pessoas.push(pessoa1, pessoa2, pessoa3)

pessoas.sort((a, b) => {
    return a.idade - b.idade;
});

let tamanhoLista = pessoas.length - 1

console.log(`A pessoa mais alta é ${pessoas[tamanhoLista].nome} e a pessoa mais baixa é ${pessoas[0].nome}`)