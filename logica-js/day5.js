let adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM e 2 para NÃO");
let comida = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];
let categoria;

while (adicionarComida == 1) {
   comida = prompt("Qual comida você deseja inserir?");
   categoria = prompt("Em qual categoria essa comida se encaixa?\n 1- Frutas\n 2- Laticínios\n 3- Congelados\n 4- Doces\n 5- Outros");
     adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM e 2 para NÃO");
  
  switch (categoria) {
  case 1:
    frutas = comida(comida.length);
  break;
   case 2:
    laticinios = comida(comida.length);
  break;
  case 3:
    congelados = comida(comida.length);
  break;
  case 4:
    doces = comida(comida.length);
  break;
  case 5:
    outros = comida(comida.length);
  break;
} 
  
} if (adicionarComida == 2) {
  console.log("Lista de compras: Frutas: " +frutas(frutas.length), "\n" , "Laticínios: " +laticinios(latinicios.length) , "\n" ,"Congelados: " +congelados(congelados.length) , "\n" , "Doces: " +doces(doces.length) ,"\n" ,"Outros: " +outros(outros.length));
} else {
  console.log("Opção inválida!");
}




 
