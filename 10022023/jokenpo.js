let option1 = prompt("Jogador 1\nEscolha entre as opções: \n1- Pedra\n2- Papel\n3- Tesoura\n4- Lagarto\n5- Spock");
let option2 = prompt("Jogador 2\nEscolha entre as opções: \n1- Pedra\n2- Papel\n3- Tesoura\n4- Lagarto\n5- Spock");

const verifyWinner = (option1, option2) => {
  let winner = "";
  if (option1 == 1) {
    option2 == 2 ? winner = 2 : "";
    option2 == 3 ? winner = 1 : "";
    option2 == 4 ? winner = 1 : "";
    option2 == 5 ? winner = 2 : "";
  } else if (option1 == 2) {
    option2 == 1 ? winner = 1 : "";
    option2 == 3 ? winner = 2 : "";
    option2 == 4 ? winner = 2 : "";
    option2 == 5 ? winner = 1 : "";
  } else if (option1 == 3) {
    option2 == 1 ? winner = 2 : "";
    option2 == 2 ? winner = 1 : "";
    option2 == 4 ? winner = 1 : "";
    option2 == 5 ? winner = 2 : "";
  } else if (option1 == 4) {
    option2 == 1 ? winner = 2 : "";
    option2 == 2 ? winner = 1 : "";
    option2 == 3 ? winner = 2 : "";
    option2 == 5 ? winner = 1 : "";
  } else if (option1 == 5) {
    option2 == 1 ? winner = 1 : "";
    option2 == 2 ? winner = 2 : "";
    option2 == 3 ? winner = 1 : "";
    option2 == 4 ? winner = 2 : "";
  }
  if (winner == "") {
    return `Empate!`;
  } else {
    return `Vencedor: jogador ${winner}`;
  }
}

alert(verifyWinner(option1, option2));