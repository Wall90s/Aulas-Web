// 2 - Criar as 4 operações básicas da matemática usando arrow function:
//  - Adição
//  - Subtração
//  - Multiplicação
//  - Divisão

let somar = (valor1, valor2) => {
    return valor1 + valor2
}

let subtrair = (valor1, valor2) => {
    return valor1 - valor2
}

let multiplicar = (valor1, valor2) => {
    return valor1 * valor2
}

let dividir = (valor1, valor2) => {
    if(valor2 === 0){
        return 'Não é possível realizar divisão por zero'
    }
    return valor1 / valor2
}

dividir(4, 0)