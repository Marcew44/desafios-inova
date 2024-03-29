//Desafio 3
// array com números dos frascos
const frascos = [12,5,23,17,8,14,3,19]
// uso do método "sort" para organizar os valores do array e uma função para organiza-los em valor crescente
frascos.sort(function (a, b) {  return a - b;  });
// exibe o resultado final em ordem crescente
console.log (`${frascos}`)