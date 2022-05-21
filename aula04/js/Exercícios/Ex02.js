// 2 - Criar 1 array já iniciado com as seguintes informações de um avião: nome do avião e ano do lançamento.
// Depois adicionar informações do fabricante e onde foi fabricado.

let aviao1 = ['Boeing 747', '1969']

console.log(`- Aviao 1
Nome: ${aviao1[0]}
Ano de lançamento: ${aviao1[1]}\n`)

aviao1.push('Boeing', 'Estados Unidos')

console.log(`- Aviao 1
Nome: ${aviao1[0]}
Ano de lançamento: ${aviao1[1]}
Fabricante: ${aviao1[2]}
País de origem: ${aviao1[3]}`)