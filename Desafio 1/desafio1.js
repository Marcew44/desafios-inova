// Desafio 1
// variável "notas" pergunta pelas 3 notas usando o prompt. Notas do desafio: 8 9 7
let notas = prompt ('Digite as 3 notas com um espaço entre elas')
// variável "notasSplit" transforma os valores da string em uma array usando o espaço (" ") como separador
let notasSplit = notas.split(" ")
// variável "soma" para a soma
let soma = 0
//loop for para iterar os valores do array criado com o "notasSplit"
for (let i = 0; i < notasSplit.length; i++) {
    // parseFloat para converter os valores do array para float, assim permitindo a manipulação de decimais
    notasSplit[i] = parseFloat(notasSplit[i])
    // soma dos valores dentro do array
    soma += notasSplit[i]
}
// variável "notasMedia" para pegar a soma dos valores da array e dividir pelo número de notas que são 3
let notasMedia = (soma / 3)
// exibe o valor final que é a média de Aline (8)
    alert (`A média de Aline é ${notasMedia.toFixed(2)}`)