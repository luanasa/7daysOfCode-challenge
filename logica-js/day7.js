/* Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?

Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". */

let escolhaOperacao = "";

let numeroUm;
let numeroDois;

//SOMA
function soma(numeroUm, numeroDois) {
  return Number(numeroUm) + Number(numeroDois);
}

//SUBTRAÇÃO
function sub(numeroUm, numeroDois) {
  return Number(numeroUm) - Number(numeroDois);
}

//MULTIPLICAÇÃO
function multi(numeroUm, numeroDois) {
  return Number(numeroUm) * Number(numeroDois);
}

//DIVISÃO
function divisao(numeroUm, numeroDois) {
  return Number(numeroUm) / Number(numeroDois);
}

do { 
	
    escolhaOperacao = prompt("Olá! Escolha uma operação:\n 1- SOMA\n 2- SUBTRAÇÃO\n 3- MULTIPLICAÇÃO\n 4- DIVISÃO\n 5- SAIR");
    while (escolhaOperacao != "1" && escolhaOperacao != "2" && escolhaOperacao != "3" && escolhaOperacao != "4" && escolhaOperacao != "5") { 
	console.log(`Operação não reconhecida!`);
	escolhaOperacao = prompt("Olá! Escolha uma operação:\n 1- SOMA\n 2- SUBTRAÇÃO\n 3- MULTIPLICAÇÃO\n 4- DIVISÃO\n 5- SAIR");
    }
	
    if (escolhaOperacao === "5"){  
		break;	
    }
	
    numeroUm = prompt("Digite o primeiro valor");
    numeroDois = prompt("Digite o segundo valor");
    switch (escolhaOperacao) {
        case '1':
          console.log(`O resultado é ${soma(numeroUm, numeroDois)}`);
          break;
        case '2':
            console.log(`O resultado é ${sub(numeroUm, numeroDois)}`);
            break;
        case '3':
            console.log(`O resultado é ${multi(numeroUm, numeroDois)}`);
            break;
        case '4':
            console.log(`O resultado é ${divisao(numeroUm, numeroDois)}`);
            break;
    }
} while(escolhaOperacao !== "5")
console.log(`Até a próxima!`);