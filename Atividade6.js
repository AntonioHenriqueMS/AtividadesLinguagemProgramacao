//Exercicio 1
const lista = [10, 12, 15, 35, 40];

function calcMedia(arr) {
    const soma = arr.reduce((total, num) => total + num, 0);
    return soma / arr.length;
}

function MaiorQueMedia(arr) {
    const media = calcMedia(arr);
    return arr.filter(valor => valor > media);
}

function calcSoma(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

function valsMenoresQue20(arr) {
    return arr.filter(valor => valor < 20);
}

console.log("Valores maiores que a média:", MaiorQueMedia(lista));
console.log("Soma dos itens da lista:", calcSoma(lista));
console.log("Valores menores que 20:", valsMenoresQue20(lista));

console.log("\n")

//Exercicio 2
const array = [5, 12, 20, 7, 9];

const [primeiro, ...restante] = array;

console.log("Primeiro elemento:", primeiro);
console.log("Restante dos elementos:", restante);
