/* Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras. */

let adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM e 2 para NÃO");
let comida = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];
let categoria = "";
let remover = "";

while (adicionarComida == 1) {
   comida = prompt("Qual comida você deseja inserir?");
   categoria = prompt("Em qual categoria essa comida se encaixa?\n 1- Frutas\n 2- Laticínios\n 3- Congelados\n 4- Doces\n 5- Outros");
     adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras, visualizar a lista atual ou remover uma comida?  Digite:\n 1- ADICIONAR COMIDA\n 2- VISUALIZAR A LISTA ATUAL\n 3- REMOVER UM ITEM");
  
  switch (categoria) {
  case '1':
    frutas.push(comida);
  break;
   case '2':
    laticinios.push(comida);
  break;
  case '3':
    congelados.push(comida);
  break;
  case '4':
    doces.push(comida);
  break;
  case '5':
    outros.push(comida);
  break;
}}

if (adicionarComida == 2) {
  console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Outros: ${outros}`);
  adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras, visualizar a lista atual ou remover uma comida?  Digite:\n 1- ADICIONAR COMIDA\n 2- VISUALIZAR A LISTA\n 3- REMOVER UM ITEM");
} else if (adicionarComida == 3) {
  	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && outros.length === 0){ 
		console.log(`A lista está vazia!`);
	} else {
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros}\n \nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso!`);
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso!`);
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso!`);
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso!`);
		} else if (outros.indexOf(remover) != -1){
			outros.splice(outros.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso!`);
		} else {
			console.log(`Não foi possível encontrar o item dentro da lista!`);
		}
	}
    } else {
  console.log("Opção inválida!");
} 

console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Outros: ${outros}`);
  




 
