// 4 - Criar um objeto que represente 3 cantores ou bandas
// contendo: nome do(a) cantor(a)/banda, nome de uma música, tempo de duração e ano de lançamento

let banda1 = {
    nome: 'Kurt Vile',
    musica: 'Bassackwards',
    duracaoMusica: '9:46',
    anoLancamento: 2018
}

let banda2 = {
    nome: 'Connan Mockasin',
    musica: "It's Choade My Dear",
    duracaoMusica: '4:05',
    anoLancamento: 2011
}

let banda3 = {
    nome: 'Sea Oleena',
    musica: 'To Hold',
    duracaoMusica: '4:00',
    anoLancamento: 2014
}

let artistas = [banda1, banda2, banda3]

for (i = 0; i < artistas.length; i++) {
    console.log(`${artistas[i].nome} - ${artistas[i].musica}\n${artistas[i].duracaoMusica} \t\t(${artistas[i].anoLancamento})\n`)
}