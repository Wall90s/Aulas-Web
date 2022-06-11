//  1 - Criar as 4 operações matemáticas usando funções:
//  - Adição
//  - Subtração
//  - Multiplicação
//  - Divisão

function somar(valor1, valor2){
    return valor1 + valor2
}

function subtrair(valor1, valor2){
    return valor1 - valor2
}

function multiplicar(valor1, valor2){
    return valor1 * valor2
}

function dividir(valor1, valor2){
    if(valor2 === 0){
        return 'Não é possível realizar divisão por zero'
    }
    return valor1 / valor2    
}

dividir(4, 0)