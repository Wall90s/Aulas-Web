import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className='menu'>
            <ul>
                <a href='/'>Home</a>
                <a href='/adicionar-produto'>Novo Produto</a>
                <a href='#'>Contato</a>
            </ul>
        </div>
    )
}

export default Navbar