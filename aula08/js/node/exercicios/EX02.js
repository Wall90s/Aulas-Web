const express = require('express')
const app = express()

app.get('/animais', (req, res) => {
    let animais = [
        {
            id: 1,
            nome: 'Alce',
            descricao: 'O maior dos cervos'
        },
        {
            id: 2,
            nome: 'Bisão',
            descricao: 'Grande mamífero'
        }
    ]

    res.send(animais)
})

app.listen(8080, () => {
    console.log('Servidor ON')
})