let banco = []

let nomePessoa = String(prompt('Digite seu nome:'))
let sobrenomePessoa = String(prompt('Digite seu sobrenome:'))
let idadePessoa = Number(prompt('Digite sua idade:'))

let pessoa = {
    nome: nomePessoa,
    sobrenome: sobrenomePessoa,
    idade: idadePessoa
}

banco.push(pessoa)
console.table(banco)

document.getElementById('main').innerHTML = `
    <div>
        <p>Seu nome é ${pessoa.nome} ${pessoa.sobrenome} e você tem ${pessoa.idade} anos</p>
    </div>
`