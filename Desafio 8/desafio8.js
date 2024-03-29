// Desafio 8
// variável "diasAtraso" pergunta pelos dia(s) de atraso. Dias de atraso proposto pelo desafio: 7 dias
let diasAtraso = prompt('Insira o(s) dia(s) de atraso')
// variável multa com o valor base (R$ 0,50) multiplicada pelo input da variável "diasAtraso"
let multa = 0.50 * diasAtraso
// variável "dias" para uso correto do singular/plural
let dias = diasAtraso <= 1 ? 'dia' : 'dias'
// exibe  o resultado final, uso do método "toFixed" para a exibição de 2 casas decimais (7 dias = R$ 3.50 de multa)
alert (`O valor da multa pelo atraso de ${diasAtraso} ${dias} é de R$ ${multa.toFixed(2)}`)   
