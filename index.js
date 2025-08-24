function calculateLevel(victories, defeats) {
  const saldovictories = victories - defeats;
  let nivel;

  if (saldovictories <= 10) {
    nivel = "Ferro";
  } else if (saldovictories >= 11 && saldovictories <= 20) {
    nivel = "Bronze";
  } else if (saldovictories >= 21 && saldovictories <= 50) {
    nivel = "Prata";
  } else if (saldovictories >= 51 && saldovictories <= 80) {
    nivel = "Ouro";
  } else if (saldovictories >= 81 && saldovictories <= 90) {
    nivel = "Diamante";
  } else if (saldovictories >= 91 && saldovictories <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldovictories} está no nível de ${nivel}`;
}

console.log(calculateLevel(90, 5));
