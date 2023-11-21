function avviaGioco() {
  const giocatore1 = parseInt((document.getElementById("giocatore1") as HTMLInputElement).value, 10);
  const giocatore2 = parseInt((document.getElementById("giocatore2") as HTMLInputElement).value, 10);

  gioco(giocatore1, giocatore2);
}

function generaNumeroCasuale(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gioco(player1: number, player2: number): void {
  const numeroCasuale: number = generaNumeroCasuale(1, 100);

  const distanzaPlayer1: number = Math.abs(numeroCasuale - player1);
  const distanzaPlayer2: number = Math.abs(numeroCasuale - player2);

  const risultatoElement = document.getElementById("risultato");

  if (risultatoElement) {
    risultatoElement.innerHTML = `Numero casuale generato: ${numeroCasuale}<br>`;

    if (distanzaPlayer1 === distanzaPlayer2) {
      risultatoElement.innerHTML += "I giocatori sono alla stessa distanza dal numero casuale. Nessun vincitore!";
    } else if (distanzaPlayer1 < distanzaPlayer2) {
      risultatoElement.innerHTML += `Il giocatore 1 si è avvicinato di più al numero casuale. Vincitore: Giocatore 1!`;
    } else {
      risultatoElement.innerHTML += `Il giocatore 2 si è avvicinato di più al numero casuale. Vincitore: Giocatore 2!`;
    }
  } else {
    console.error("Elemento con id 'risultato' non trovato.");
  }
}
