function calculateLevel(victories, defeats) {
  const winningBalance = victories - defeats;
  let nivel;

  if (winningBalance <= 10) {
    nivel = "Ferro";
  } else if (winningBalance >= 11 && winningBalance <= 20) {
    nivel = "Bronze";
  } else if (winningBalance >= 21 && winningBalance <= 50) {
    nivel = "Prata";
  } else if (winningBalance >= 51 && winningBalance <= 80) {
    nivel = "Ouro";
  } else if (winningBalance >= 81 && winningBalance <= 90) {
    nivel = "Diamante";
  } else if (winningBalance >= 91 && winningBalance <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${winningBalance} está no nível de ${nivel}`;
}

//exemplo de uso
console.log(calculateLevel(90, 5));
