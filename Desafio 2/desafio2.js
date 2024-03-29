//Desafio 2
// array com os números propostos no desafio
const numeros = [15, 8, 90 ,75, 102, 6, 2 ]
// uso do objeto "Math" com os métodos "max" e "min" com arrays para descobrir o maior e menor valor, respectivamente
// uso do operador spread (...) para espalhar os elementos do array no objeto "Math"
const maiorNum = Math.max(...numeros);
const menorNum = Math.min(...numeros);
// Resultado final com o maior e menor número 
console.log (`O maior número é ${maiorNum} e o menor número é ${menorNum}`)