// Desafio 5
// variável "frase" pergunta pela frase. Frase proposta no desafio: What is Lorem Ipsum?
let frase = prompt('Insira a frase com um espaço por palavra')
// variável "fraseSplit" transforma a string em array usando o espaço (' ') como separador
let fraseSplit = frase.split (" ")
// variável "frasePlvrs" utilizando a propriedade length para retornar a qtd. de itens na array como número
let frasePlvrs = fraseSplit.length
// variável "fraseC" para uso correto do singular/plural 
let fraseC = frasePlvrs <=1 ? 'palavra' : 'palavras'
// exibe resultado final
alert (`A frase tem ${frasePlvrs} ${fraseC}`)
