/* Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca
O programa deverá imprimir, por exemplo:
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho */


    let adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM e 2 para NÃO");
    let comida = "";
    let frutas = [];
    let laticinios = [];
    let congelados = [];
    let doces = [];
    let outros = [];
    let categoria = "";
    
    while (adicionarComida == 1) {
       comida = prompt("Qual comida você deseja inserir?");
       categoria = prompt("Em qual categoria essa comida se encaixa?\n 1- Frutas\n 2- Laticínios\n 3- Congelados\n 4- Doces\n 5- Outros");
         adicionarComida = prompt("Olá, deseja adicionar uma comida na sua lista de compras? Digite 1 para SIM e 2 para NÃO");
      
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
    } 
    
    if (adicionarComida == 2) {
      break;
    
    } else {
      console.log("Opção inválida!");
    }
    
    } 
    
    console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n  Outros: ${outros}`);
      
    