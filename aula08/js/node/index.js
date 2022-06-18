const express = require('express')
const app = express()

const portValue = 8000

app.get('/', (req, res) => {
    res.send('Pong')
})

app.get('/produtos', (req, res) => {
    let produto = {
        id: 1,
        nome: 'Patolé de morango',
        descricao: 'Picolé com formato de pé de pato sabor morango'
    }

    res.send(produto)
})

app.listen(portValue, () => {
    console.log(`Servidor ON \nhttp://localhost:${portValue}`)
})