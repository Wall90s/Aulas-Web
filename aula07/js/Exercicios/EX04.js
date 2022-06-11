// 4 - Criar uma função que receba um objeto como parâmetro e imprira as informações do objeto
// O objeto deve conter nome, idade, endereço, telefone e profissão
// Sendo que telefone e endereço devem ser uma lista
// EX: ['rua x', 'rua y'] ['1197656464', '11945687892']

let pessoa1 = {
    nome:'Adalberto Pires',
    idade: 34,
    profissao: 'Carpinteiro',
    telefones: ['2729797774', '11946579631', '11997139871'],
    enderecos: ['Av: Ouro Branco', 'Rua Dubal Antonio de Queiroz']
}

function imprimirCadastroTela(objetoPessoa){
    console.log(`Cadastro de ${objetoPessoa.nome}:
    - Idade: ${objetoPessoa.idade}
    - Profissão: ${objetoPessoa.profissao}`)
    
    process.stdout.write('- Telefones: ')
    for(i = 0; i < 3; i++){
        process.stdout.write(objetoPessoa.telefones[i] + ' / ')
    }

    process.stdout.write('\n- Endereços: ')
    for(i = 0; i < 2; i++){
        process.stdout.write(objetoPessoa.enderecos[i] + ' / ')
    }
}

imprimirCadastroTela(pessoa1)

