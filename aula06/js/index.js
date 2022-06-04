let banco = []

let nome = String(prompt("Digite seu nome:"))
let idade = Number(prompt("Digite sua idade:"))
let telefone = String(prompt("Digite seu telefone:"))

let pNome = document.getElementById('nome')
let pIdade = document.getElementById('idade')
let pTelefone = document.getElementById('telefone')

let pessoa = {
    nomePessoa: nome,
    idadePessoa: idade,
    telefonePessoa: telefone
}

banco.push(pessoa)

pNome.innerHTML = `Nome: ${pessoa.nomePessoa}`
pIdade.innerHTML = `Idade: ${pessoa.idadePessoa}`
pTelefone.innerHTML = `Telefone: ${pessoa.telefonePessoa}`