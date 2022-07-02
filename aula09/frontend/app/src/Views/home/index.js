import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from 'axios'


function Home(){
    const [data, setData] = useState([])

    function buscarTodosProdutos (){
        axios.get('http://localhost:8080/produtos')
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
                        <p>R$ {produto.preco}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Home