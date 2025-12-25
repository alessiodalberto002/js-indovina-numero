// VARIABILI GLOBALI //
let numeroDaIndovinare;
let conteggioTentativi = 0;

// GENERIAMO UN NUMERO CASUALE DA 1 A 100 //
function generaNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

// INIZIALIZZIAMO IL GIOCO ALL'AVVIO //
function inizializzaGioco() {
    numeroDaIndovinare = generaNumero();
    conteggioTentativi = 0;
    document.getElementById('messaggio').textContent = '';
    document.getElementById('tentativi').textContent = 'Tentativi: 0';
    document.getElementById('tentativo').value = '';
    document.getElementById('tentativo').disabled = false;
    console.log('Numero segreto:', numeroDaIndovinare); // Per test
}