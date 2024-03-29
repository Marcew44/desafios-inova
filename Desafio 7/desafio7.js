// Desafio 7
// variável "valores" pergunta pelos preços. Preços do desafio: R$ 2.50 3.75 1.99
let valores = prompt ('Insira os preços usando um ponto ( . ) no lugar da vírgula ( , ) e com um espaço entre eles')
// variável "valoresSplit" transforma os valores da string em uma array
let valoresSplit = valores.split (' ')
// variável "soma" para a soma
let soma = 0
// loop "for" para iterar os valores do array criado com o "valoresSplit"
for (let i = 0; i < valoresSplit.length; i++) {
    // parseFloat para converter os valores da array para float(decimal)
    valoresSplit[i] = parseFloat(valoresSplit[i])
    // somas dos valores dentro da array
    soma += valoresSplit[i]
}
// exibição do resultado final (valor da compra R$ 8.24)
alert (`O valor total da compra é de R$ ${soma}`)