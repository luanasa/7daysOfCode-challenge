/* Dia 3 -> Fluxo de decisão

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
*/


const area = prompt("Em qual area você quer seguir? 1-Front-End ou 2-Back-End? Digite o número correspondente a área desejada:");
let tec = "";
let tecLista = []; 

// Área 

if (area == 1) {
    tec = prompt("Você quer aprender React ou Vue?");

} else if (area == 2) {
    tec = prompt("Você quer aprender C# ou Java?");
} else {
    alert(`Opção inválida! Digite o valor correspondente a área desejada.`);
}

// Tecnologia

const fullstackOrnot = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? 1- SIM ou 2- NÃO");

if (fullstackOrnot == 1) {
    alert(`Show! Continue se especializando em ${tec} e você vai longe!`);
} else if (fullstackOrnot == 2) {
    alert(`Isso aí! Ao infinito e além.`);
} else {
    alert(`Opção inválida`);
}

// Extra 

let extra = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se sim.");

while (extra === "ok") {
    let newTec = prompt("Quais?");
    alert(`Ual! ${newTec} é incrivel, você não vai se arrepender.`);
    extra = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se sim.");
}


