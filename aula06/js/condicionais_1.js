let idade = 15
let estaAcompanhado = false

if (idade >= 18) {
    console.log("Você é maior de idade, poderá entrar na festa")
} else if (idade < 18 || estaAcompanhado == false) {
    console.log("Você é menor de idade ou não está acompanhado, não poderá entrar na festa")
} else if (idade < 18 && estaAcompanhado == true) {
    console.log("Você está acompanhado, poderá entrar na festa")
}

let leite = true
let massaBolo = true
let ovo = true
let manteiga = true

if (leite == true && massaBolo == true && ovo == true && manteiga == true) {
    console.log("Mãe: posso fazer um bolo")
} else if (leite == true || massaBolo == true || ovo == true || manteiga == true) {
    console.log("Vó: posso fazer um bolo")
} else {
    console.log("Sem bolo hoje :(")
}