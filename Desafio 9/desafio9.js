// Desafio 9
// variável "qtdAtk" pergunta pela quantidade de ataques. Qtd. de ataques proposto pelo desafio: 3
let qtdAtk = prompt('Quantas vezes o personagem foi atacado?')
// variável "dano" calcula o dano baseado no input de "qtdAtk"
let dano = 100 - qtdAtk * 20
// variável "qtdAtkVzs" para uso correto do singular/plural
let qtdAtkVzs = qtdAtk <= 1 ? 'vez' : 'vezes'
// exibe o resultado final (Depois de 3 ataques, lhe sobra 40 de HP)
if (qtdAtk >= 5) {
    alert ('Vocês foi atacado vezes demais e morreu')
} else { 
    alert (`Depois de ser atacado ${qtdAtk} ${qtdAtkVzs}, lhe restou ${dano} de HP`) 
}

