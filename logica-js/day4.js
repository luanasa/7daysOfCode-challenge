/* 
Dia 4 -> Mais loops e randomização

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */


let number = Math.floor(Math.random() * 11);


console.log("Jogo da vidência!"); 
let choice = prompt("Chute um número entre 0 e 10.");

if (choice == number) {
  console.log("Parabéns! Você acertou.");

} else {
  for (var i = 0; i < 3; i++) {
  choice = prompt("Tente novamente.");
} 
  console.log("Infelizmente você não acertou :( A resposta era: " +number);
} 
