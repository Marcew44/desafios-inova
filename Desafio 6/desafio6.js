let numFtr = prompt ('Insira um número para descobrir o fatorial do mesmo') // núm. do desafio = 12
let numFtrOG = numFtr
    for (let i = numFtr - 1; i >= 1; i--) {
        numFtr *= i
}
if (numFtrOG == 0) {
    alert (`O fatorial de ${numFtrOG} é 1`) 
    
} else {
    alert (`O fatorial de ${numFtrOG} é ${numFtr}`)
}

