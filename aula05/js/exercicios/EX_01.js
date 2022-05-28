// 1 - Criar 3 objetos representando 3 membros da família
// contendo: nome da pessoa, sobrenome, idade, telefone e se a pessoa é maior de idade

let membro1 = {
    nome: 'Agatha Karol',
    sobrenome: 'B. Silva',
    idade: 17,
    telefone: '(11)9999-0000',
    maiorIdade: false
}

let membro2 = {
    nome: 'Isaac Afonso',
    sobrenome: 'B. Silva',
    idade: 13,
    telefone: '(11)9999-0001',
    maiorIdade: false
}

let membro3 = {
    nome: 'Nina',
    sobrenome: 'B. Silva',
    idade: 10,
    telefone: '(11)9999-0002',
    maiorIdade: false
}

let membros = [membro1, membro2, membro3]

for (i = 0; i < membros.length; i++) {
    console.log(membros[i])
}