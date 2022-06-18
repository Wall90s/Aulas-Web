const express = require('express')
const app = express()

app.get('/contatos', (req, res) => {
    contatos = [
        {
            nome: 'Bianca Caroline',
            sobrenome: 'Ana Araújo',
            dataNascimento: '03/06/1945',
            telefone: '(11) 99905-6992'
        },
        {
            nome: 'Cecília Stefany',
            sobrenome: 'Paz',
            dataNascimento: '15/06/1973',
            telefone: '(63) 98278-9129'
        }
    ]

    res.send(contatos)
})

app.get('/enderecos', (req, res) => {
    enderecos = [
        {
            logradouro: 'Rua dos Cajus',
            bairro: 'Chácara Vitápolis',
            estado: 'SP',
            cep: '06693-620'
        },
        {
            logradouro: 'Quadra 1203 Sul Alameda 8',
            bairro: 'Plano Diretor Sul',
            estado: 'TO',
            cep: '77019-438'
        }
    ]

    res.send(enderecos)
})

app.listen(8080, () => {
    console.log('Servidor ON')
})