function Potencia(){
    var numero1 = document.getElementById("numero1")
    var numero2 = document.getElementById("numero2")
    var resultado = document.getElementById("resultado")

    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)

    resultado.innerHTML = n1 ** n2
}

function Limpar(){
    resultado.innerHTML = ""
}