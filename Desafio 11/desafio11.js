// Desafio 11
// variável "data" pergunta pela data de nascimento
let data = prompt ('Insira sua data de nascimento no formato yyyy-mm-dd')
// variável "dataSplit" transforma os valores da string em array usando o hífen ('-') como separador
let dataSplit = data.split('-')
// variável "idade" calcula a idade usando o primeiro valor do array que é o ano de nascimento
let idade = 2024 - dataSplit[0]
// variável "dataC" para uso correto do singular/plural
let dataC = dataSplit[0] >= 2023 ? 'ano' : 'anos'
// exibe o resultado final
alert (`Você tem ${idade} ${dataC} de idade.`)
