import React, { useState } from "react"
import axios from "axios"
import Navbar from "../../components/navbar"
import '../novoProduto/novoProduto.css'

export function NovoProduto() {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0)

    let produto = {
        id: Number.parseInt(Math.random() * 10),
        nome: nome,
        descricao: descricao,
        valor: valor
    }

    console.log()

    function AdicionarProduto() {
        axios.post('http://localhost:8080/adicionar-produto', produto)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <ul>
                
            </ul>
            <input onChange={((e) => setNome(e.target.value))} placeholder="nome do produto" />
            <input onChange={((e) => setDescricao(e.target.value))} placeholder="descrição" />
            <input onChange={((e) => setValor(e.target.value))} placeholder="valor" />

            <button className="botao" onClick={() => AdicionarProduto()}>Adicionar Produto</button>
        </>
    )
}