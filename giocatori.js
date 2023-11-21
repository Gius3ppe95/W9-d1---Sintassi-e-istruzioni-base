function avviaGioco() {
    var giocatore1 = parseInt(document.getElementById("giocatore1").value, 10);
    var giocatore2 = parseInt(document.getElementById("giocatore2").value, 10);
    gioco(giocatore1, giocatore2);
}
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function gioco(player1, player2) {
    var numeroCasuale = generaNumeroCasuale(1, 100);
    var distanzaPlayer1 = Math.abs(numeroCasuale - player1);
    var distanzaPlayer2 = Math.abs(numeroCasuale - player2);
    var risultatoElement = document.getElementById("risultato");
    if (risultatoElement) {
        risultatoElement.innerHTML = "Numero casuale generato: ".concat(numeroCasuale, "<br>");
        if (distanzaPlayer1 === distanzaPlayer2) {
            risultatoElement.innerHTML += "I giocatori sono alla stessa distanza dal numero casuale. Nessun vincitore!";
        }
        else if (distanzaPlayer1 < distanzaPlayer2) {
            risultatoElement.innerHTML += "Il giocatore 1 si \u00E8 avvicinato di pi\u00F9 al numero casuale. Vincitore: Giocatore 1!";
        }
        else {
            risultatoElement.innerHTML += "Il giocatore 2 si \u00E8 avvicinato di pi\u00F9 al numero casuale. Vincitore: Giocatore 2!";
        }
    }
    else {
        console.error("Elemento con id 'risultato' non trovato.");
    }
}
