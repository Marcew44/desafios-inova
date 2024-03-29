const numeros = [23, 16, 11, 8, 19, 14, 5, 21] // array com os números propostos no desafio
const numerosPrimos = []
for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i]
    let isPrime = true
    if (num <= 1) {
        isPrime = false
    } else {
        for (let p = 2; p * p <= num; p++) {
            if (num % p === 0) {
                isPrime = false
            }
        }
    }
    if (isPrime) {
        numerosPrimos.push(num)
    }
}
console.log(`Os números primos são: ${numerosPrimos}`)
