/* Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa. 

OPCIONAL: 

Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens? */



const yourName = console.log("Qual o seu nome?");
const age = console.log("Quantos anos você tem?");
const language = console.log("Qual linguagem de programação você está estudando?");
const yesOrNo= console.log("Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.");

//console.log(`Olá ${yourName}, você tem ${age} anos e já está aprendendo ${language}!`); first try

const msg = `"Olá ${yourName}, você tem ${age} anos e já está aprendendo ${language}!"!`;

console.log(msg);

if ( yesOrNo == "1") {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");

} else if (yesOrNo == "2") {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");

} else {
    console.log("Resposta inválida! Você deve inserir 1 para SIM ou 2 para NÃO.");
}


