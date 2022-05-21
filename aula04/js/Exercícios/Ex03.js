/* 3 - Criar 5 arrays contendo informações de intrumentos,
onde o array já deve estar inicado com:
- nome do instrumento
- ano de fabricação
- onde ou por quem é utilizado

Adicionar informações:
- ano de criação
- material do instrumento

Em seguida remova as informações:
- onde ou por quem é utilizado
- ano de fabricação
*/


/*  - nome do instrumento
    - ano de fabricação
    - onde ou por quem é utilizado
*/
let instrumento1 = ['Baixo elétrico', '1950', 'Pop, rock, grunge etc']
let instrumento2 = ['Teremim', '1929', 'Orchestral, Pop, Trilha sonora']
let instrumento3 = ['Baixo elétrico', '1950', 'Gêneros considerados modernos']
let instrumento4 = ['Baixo elétrico', '1950', 'Gêneros considerados modernos']
let instrumento5 = ['Baixo elétrico', '1950', 'Gêneros considerados modernos']

console.log(`- Instrumento 1
Nome: ${instrumento1[0]}
Ano de fabricação: ${instrumento1[1]}
Onde ou por quem é utilizado: ${instrumento1[2]}`)

console.log(`- Instrumento 2
Nome: ${instrumento2[0]}
Ano de fabricação: ${instrumento2[1]}
Onde ou por quem é utilizado: ${instrumento2[2]}`)


/*Adicionar informações:
- ano de criação
- material do instrumento*/

instrumento1.push('1930', 'Madeira, Grafite, aço, etc')
instrumento1.push('1930', 'Madeira, Grafite, aço, etc')

console.log(`- Instrumento 1
Nome: ${instrumento1[0]}
Ano de fabricação: ${instrumento1[1]}
Onde ou por quem é utilizado: ${instrumento1[2]}
Ano de criação: ${instrumento1[3]}
Material do instrumento: ${instrumento1[4]}`)

/*Em seguida remova as informações:
- onde ou por quem é utilizado
- ano de fabricação*/
instrumento1.pop("Pop, rock, grunge etc")
instrumento1.pop("1950")

console.log(`- Instrumento 1
Nome: ${instrumento1[0]}
Ano de fabricação: ${instrumento1[1]}
Onde ou por quem é utilizado: ${instrumento1[2]}
Ano de criação: ${instrumento1[3]}
Material do instrumento: ${instrumento1[4]}`)