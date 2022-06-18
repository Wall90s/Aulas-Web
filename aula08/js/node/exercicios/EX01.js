const express = require('express')
const app = express()

app.get('/produtos', (req, res) => {
    let produtos = [
        {
            id: 001,
            nome: 'TermoGenius Guarda-Sol',
            descricao: 'Guarda-sol de tamanho grande',
            preco: 57.0,
        },
        {
            id: 002,
            nome: 'TermoGenius Garrafa',
            descricao: 'Garra térmica de 5L',
            preco: 43.0,
        }
    ]

    res.send(produtos)
})

app.listen(8080, () => {
    console.log('Servidor ON')
})