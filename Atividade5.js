// Exerc 1
function calcularPrecoComDesconto(valor,qtd,fncallback){
    const total = valor * qtd
    return fncallback(total)
}

function descontoSimples(valor){
    const desconto = 0.1 // 10%
    return valor - (valor * desconto)
}

const precoNormal = 100
const precoComDesconto = calcularPrecoComDesconto(precoNormal,1,descontoSimples)
console.log(precoComDesconto)

// Exerc 2
const arrayPrint = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
]

arrayPrint.forEach(lista => {
    lista.forEach(numero => {
        if(numero >10){
            console.log(numero)
        }
    })
});
