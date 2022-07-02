const express = require ('express')
const app = express()
const cors = require('cors')

app.use(cors())

let listaProdutos = [
    {
        id: 01,
        nome: 'Biscoito',
        preco: 2.90
    },
    {
        id: 02,
        nome: 'Achocolatado',
        preco: 5.40
    },
    {
        id: 03,
        nome: 'Leite',
        preco: 7.25
    }
]

app.get('/produtos', (req, res) => {
    res.send(listaProdutos)
})

app.listen(8080, () =>{
    console.log('Servidor ON')
})