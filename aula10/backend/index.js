const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())

// banco de dados
let database = []

// endpoints
app.get('/', (req, res) => {
    return res.send(database)
})

app.post('/adicionar-produto', (req, res) => {
    let produto = req.body
    database.push(produto)
    return res.send({
        status: 200,
        message: 'Produto adicionado'
    })
})

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`)
})
