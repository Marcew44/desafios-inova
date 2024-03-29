let frase = prompt ("Insira a frase") // LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let contador = 0
for (letrasMai in frase) {
if (letrasMaiusculas.includes(frase[letrasMai])){
   contador++
  }
}
alert (`A frase tem ${contador} letras maiúsculas`)
