//Exercicio 1
function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b
    } else {
        return "Não é possível dividir por zero!"
    }
}

function calcular(valorA, valorB, operacao) {
    return operacao(valorA, valorB)
}

let teste = calcular(10,7, somar)
console.log("Resultado: " + teste)

teste = calcular(7,10, multiplicar)
console.log("Resultado: " + teste)

teste = calcular(10,5, dividir)
console.log("Resultado: " + teste)

teste = calcular(40,0, dividir)
console.log("Resultado: " + teste)


//Exercicio 2
class Cliente {
    constructor(nome, telefone, renda, email) {
        this.nome = nome
        this.telefone = telefone
        this.renda = renda
        this.email = email
    }

    verificarCredito() {
        return new Promise((resolve, reject) => {
            if (this.renda > 2000) {
                resolve("Crédito Aprovado");
            } else {
                reject("Crédito Recusado");
            }
        })
    }
}


const cliente1 = new Cliente("Gabriel", "123456789", 2500, "Gabriel@gmail.com")
const cliente2 = new Cliente("Gabi", "987654321", 1500, "Gabi@gmail.com")

cliente1.verificarCredito()
    .then(resultado => {
        console.log(cliente1.nome + ": " + resultado)
    })
    .catch(erro => {
        console.log(cliente1.nome + ": " + erro)
    });

cliente2.verificarCredito()
    .then(resultado => {
        console.log(cliente2.nome + ": " + resultado)
    })
    .catch(erro => {
        console.log(cliente2.nome + ": " + erro)
    });
