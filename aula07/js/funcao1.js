function somar() {
    // sem parâmetros
    var n1 = 5
    var n2 = 15

    console.log(`A soma entre: ${n1} + ${n2} = ${n1 + n2}`)
}

function somarComParametros(num1, num2) {
    // com parâmetros
    console.log(`A soma entre: ${num1} + ${num2} = ${num1 + num2}`)
}

var subtrair = () => {
    // arrow function sem parâmetros
    console.log('Hello arrow function')
}

var dividir = (n1, n2) => {
    // arrow function com parâmetros
    console.log(n1 / n2)
}

dividir(12, 4)