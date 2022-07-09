import axios from "axios"
import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar"


function Home() {
    const [data, setData] = useState([])

    function buscarTodosProdutos() {
        axios.get('http://localhost:8080/')
            .then((response) => {
                setData(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        buscarTodosProdutos()
    }, [])

    return (
        <div>
            <Navbar />
            {
                data.map((produto) => (
                    <div key={produto.id}>
                        <p>{produto.nome}</p>
                        <p>R$ {produto.valor}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home